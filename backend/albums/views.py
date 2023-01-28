from rest_framework import generics
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from knox.auth import TokenAuthentication

from django.http import QueryDict
from .serializers import AlbumSerializer, AlbumListSerializer
from .models import Album


class AlbumListAPI(generics.GenericAPIView):
    serializer_class = AlbumSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    
    def post(self, request):
        serializer = self.get_serializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class AlbumDetailAPI(generics.GenericAPIView):
    queryset = Album.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    def get(self, request, pk):
        try:
            album = get_object_or_404(Album, pk=pk)
            serializer = AlbumSerializer(album)
        except Exception as e:
            print(e)
        return Response(serializer.data)
    

    def put(self, request, pk):
        album = get_object_or_404(Album, pk=pk)
        serializer = AlbumListSerializer(album, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    

    def delete(self, request, pk):
        try:
            print(request.data['userDataId'], request.header)
            queryset = get_object_or_404(Album, pk=pk)
            queryset.delete()
        except Exception as e:
            print(e)
        return Response(True)
