from rest_framework import serializers
from .models import Album, Track


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'user', 'title', 'cover_image_url', 'd_day')

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.cover_image_url = validated_data.get('cover_image_url', instance.cover_image_url)
        instance.d_day = validated_data.get('d_day', instance.d_day)
        instance.save()
        return instance


class AlbumDetailSerializer(serializers.ModelSerializer):
    user_nickname = serializers.StringRelatedField(source='user.nickname', read_only=True)
    created_at = serializers.DateTimeField(format='%Y-%m-%d')
    tracks = serializers.SerializerMethodField()

    class Meta:
        model = Album
        fields = ('id', 'title', 'user_nickname', 'cover_image_url', 'd_day', 'join_count', 'tracks', 'created_at')
    
    def get_tracks(self, album):
        tracks = Track.objects.filter(album=album).order_by('seq')
        tracks = TrackSerializer(tracks, many=True).data
        return tracks


class TrackCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Track
        fields = '__all__'

    # def validate(self, data):
    #     if data.get('status') in Track.Status.get_values():
    #         raise serializers.ValidationError()
    #     if data.get('seq') > 10:
    #         raise serializers.ValidationError()

class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ('id', 'album', 'user_id', 'nickname', 'title', 'audio', 'duration', 'seq', 'status')
