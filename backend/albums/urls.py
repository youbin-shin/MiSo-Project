from django.urls import path
from .views import AlbumListAPI, AlbumDetailAPI

urlpatterns = [
    path('', AlbumListAPI.as_view()),
    path('<int:pk>/', AlbumDetailAPI.as_view()),
]   