from rest_framework import generics
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import HttpResponseNotFound, HttpResponseForbidden, HttpResponseServerError, HttpResponseBadRequest
from knox.auth import TokenAuthentication

from .serializers import AlbumSerializer, AlbumDetailSerializer
from .models import Album


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
            return Response(serializer.data)
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
                return Response("Forbidden")
            album.delete()
        except Exception as e:
            return HttpResponseNotFound(e)
        return Response(True)
