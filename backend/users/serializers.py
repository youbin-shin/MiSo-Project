from rest_framework import serializers
from .models import User


# 회원가입
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('nickname', 'email', 'profile_image_url')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'nickname')

