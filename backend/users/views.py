from rest_framework import permissions, generics, serializers
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from knox.models import AuthToken
from django.http import QueryDict
from .serializers import CreateUserSerializer, UserSerializer
from .models import User
import requests


class SignupAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)[1]
        return Response (
            {
                'user' : CreateUserSerializer(
                    user, context = self.get_serializer_context()
                ).data,
                'token': token,
            }
        )


class UserAPI(generics.RetrieveAPIView):
    permissions_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_object(self):
        return self.request.user

    def get(self, request, nickname):
        user = User.objects.get(nickname=nickname)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class KakaoSignInAPI(generics.GenericAPIView):

    def post(self, request):
        try:
            access_token = request.data["access_token"]
            kakao_user_data = requests.get(
                "https://kapi.kakao.com/v2/user/me", 
                headers={"Authorization": f"Bearer {access_token}"}
            ).json()

            user_info = kakao_user_data["kakao_account"]
            email = user_info["email"]
            if User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
            else:
                user = User.objects.create(
                        email=email, 
                        nickname=user_info["profile"]["nickname"], 
                        profile_image_url=user_info["profile"]["profile_image_url"]
                    )
            token = AuthToken.objects.create(user)[1]
        except KeyError:
            return Response({"message": "KeyError"})
        except Exception as e:
            print(e)
        return Response (
            {
                'user' : UserSerializer(user).data,
                'token': token,
            }
        )
