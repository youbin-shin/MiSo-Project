from rest_framework import serializers
from .models import Album


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

    class Meta:
        model = Album
        fields = ('id', 'title', 'user_nickname', 'cover_image_url', 'd_day', 'join_count', 'created_at')
