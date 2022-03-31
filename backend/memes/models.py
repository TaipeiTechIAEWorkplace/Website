from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
# from rest_framework import serializers
# from rest_framework.serializers import Serializer

class Tag(models.Model):
    name = models.CharField(max_length = 200)
    def __str__(self):
        return self.name

class Photo(models.Model):
    title = models.CharField(max_length=16, null = True)
    # uploader = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null = True)
    uploader = models.ForeignKey(User, on_delete=models.SET_NULL,blank = True, null = True)
    # uploader = serializers.HiddenField(default=serializers.CurrentUserDefault())
    image = models.ImageField(upload_to='memes/', blank = False, null = True)
    upload_date = models.DateTimeField(auto_now_add = True, null = True)
    description = models.TextField(blank = True, max_length = 256, null = True)
    tags = models.ManyToManyField(Tag, blank = True)
    

    def __str__(self):
        return self.title