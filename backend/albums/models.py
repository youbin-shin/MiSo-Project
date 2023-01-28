from django.db import models
from django.conf import settings


class Album(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name= "user_album")
    title = models.CharField(max_length=100)
    cover_image_url = models.CharField(max_length=256)
    d_day = models.CharField(max_length=20)
    join_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
