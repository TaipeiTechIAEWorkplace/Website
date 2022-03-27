from django.db import models
from django.contrib.auth.models import User

class Member(models.Model):
    user = models.OneToOneField(User, null = True, on_delete = models.CASCADE)
    intro = models.CharField(default = 'Intro not entered', max_length = 512, blank = True, null = True)
    imguploaded = models.IntegerField(default = 0, null = True)
    likes = models.IntegerField(default = 0, null = True)
    profile_pic = models.ImageField(default = "default.png", blank = True, null = True)
    date_create = models.DateTimeField(auto_now_add = True, null = True)
    '''
    def __str__(self):
        if self.user:
            return self.user.username
    '''