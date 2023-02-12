from django.urls import path
from .views import AlbumListAPI, AlbumDetailAPI, TrackCreateAPI, TrackAPI

urlpatterns = [
    path('', AlbumListAPI.as_view()),
    path('<int:pk>/', AlbumDetailAPI.as_view()),
    path('<int:pk>/tracks/', TrackCreateAPI.as_view()),
    path('<int:album_pk>/tracks/<int:track_pk>/', TrackAPI.as_view()),
]   