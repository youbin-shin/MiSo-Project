from django.db import models
from django.conf import settings
from Miso.utils import ChoiceEnum


class Album(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name= "user_album")
    title = models.CharField(max_length=100)
    cover_image_url = models.CharField(max_length=256)
    d_day = models.CharField(max_length=20)
    join_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)


class Track(models.Model):
    class Status(ChoiceEnum):
        DELETE = 0
        ONLY_OWNER = 1
        PUBLIC = 2

    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    user_id = models.IntegerField(default=-1)
    nickname = models.CharField(max_length=10)
    title = models.CharField(max_length=100)
    audio = models.CharField(max_length=256)
    duration = models.IntegerField()
    seq = models.IntegerField()
    status = models.SmallIntegerField(default=Status.PUBLIC.value, choices=Status.choices())
    created_at = models.DateTimeField(auto_now_add=True)
