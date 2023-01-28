from django.urls import path
from .views import SignupAPI, UserAPI, KakaoSignInAPI

urlpatterns = [
    path('signup/', SignupAPI.as_view()),
    path('<str:nickname>/', UserAPI.as_view()),
    path('kakao/signin/', KakaoSignInAPI.as_view()),
]   