from rest_framework import generics
from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import HttpResponseNotFound, HttpResponseForbidden, HttpResponseServerError, HttpResponseBadRequest
from knox.auth import TokenAuthentication

from .serializers import AlbumSerializer, AlbumDetailSerializer, TrackCreateSerializer, TrackSerializer
from .models import Album, Track


class AlbumListAPI(generics.GenericAPIView):
    serializer_class = AlbumSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            queryset = Album.objects.filter(user=request.user).order_by('-id')
            serializer = self.get_serializer(queryset, many=True)
        except Exception as e:
            return HttpResponseServerError(e)
        return Response(serializer.data)
    
    def post(self, request):
        request_data = request.data
        request_data["user"] = request.user.id
        serializer = self.get_serializer(data = request_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return HttpResponseBadRequest(e)


class AlbumDetailAPI(generics.GenericAPIView):
    queryset = Album.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    def get(self, request, pk):
        try:
            album = Album.objects.get(pk=pk)
            serializer = AlbumDetailSerializer(album)
        except Exception as e:
            return HttpResponseNotFound(e)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            album = get_object_or_404(Album, pk=pk)
            if album.user.id != request.user.id:
                return HttpResponseForbidden
            serializer = AlbumSerializer(album, data = request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        except Exception as e:
            return HttpResponseNotFound(e)

    def delete(self, request, pk):
        try:
            album = get_object_or_404(Album, pk=pk)
            if album.user.id != request.user.id:
                return HttpResponseForbidden()
            album.delete()
        except Exception as e:
            return HttpResponseNotFound(e)
        return Response(True)


class TrackCreateAPI(generics.GenericAPIView):
    serializer_class = TrackSerializer

    def post(self, request, pk):
        try:
            # TODO: seq validation check
            album = get_object_or_404(Album, pk=pk)
            request_data = request.data
            if request.user:
                request_data["user_id"] = request.user.id
                request_data["nickname"] = request.user.nickname
            else:
                request_data["user_id"] = -1
                request_data["nickname"] = request.user.nickname
            res_data = Track.objects.create(
                album_id=album.id,
                title=request_data["title"],
                user_id=request_data["user_id"],
                nickname=request.user.nickname,
                audio=request_data["audio"],
                duration=request_data["duration"],
                seq=request_data["seq"]
            )
            return Response(TrackCreateSerializer(res_data).data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)

    def get(self, request, pk):
        try:
            album = get_object_or_404(Album, pk=pk)
            queryset = Track.objects.filter(
                album=album
            ).order_by('seq')
            serializer = self.get_serializer(queryset, many=True)
        except Exception as e:
            return HttpResponseServerError(e)
        return Response(serializer.data)


class TrackAPI(generics.GenericAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, album_pk, track_pk):
        try:
            track = Track.objects.get(album=album_pk, id=track_pk)
            serializer = TrackSerializer(track)
            return Response(serializer.data)
        except Exception as e:
            print(e)

    def put(self, request, album_pk, track_pk):
        try:
            track = get_object_or_404(Track, pk=track_pk)
            if track.user_id != request.user.id:
                return HttpResponseForbidden
            if track.album_id != album_pk:
                return HttpResponseForbidden
            serializer = TrackSerializer(track, data = request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        except Exception as e:
            print(e)
            return HttpResponseNotFound(e)

    def delete(self, request, album_pk, track_pk):
        try:
            track = get_object_or_404(Track, pk=track_pk)
            print('here')
            if track.user_id != request.user.id:
                return HttpResponseForbidden()
            if track.album_id != album_pk:
                return HttpResponseForbidden
            track.delete()
        except Exception as e:
            return HttpResponseNotFound(e)
        return Response(True)
