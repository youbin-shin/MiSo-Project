from rest_framework import serializers
from .models import Album


class AlbumSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(source='user.nickname', read_only=True)
    class Meta:
        model = Album
        fields = ('__all__')


class AlbumListSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(source='user.nickname', read_only=True)

    class Meta:
        model = Album
        fields = ('id', 'title', 'user', 'cover_image_url', 'd_day', 'join_count', 'created_at')

