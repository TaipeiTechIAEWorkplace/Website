from django.db import models
from django.contrib.auth.models import User

class tag(models.Model):
    name = models.CharField(max_length = 200)

    def __str__(self):
        return self.name

class Photo(models.Model):
    title = models.CharField(max_length=16, null = True)
    uploader = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    image = models.ImageField(upload_to='memes/', blank = False, null = True)
    upload_date = models.DateTimeField(auto_now_add = True, null = True)
    image_description = models.TextField(blank = True, max_length = 256, null = True)
    tags = models.ManyToManyField(tag, blank = True)
    

    def __str__(self):
        return self.title