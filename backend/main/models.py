from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class personalinformation(models.Model):
    
    user = models.OneToOneField(User, null = True, blank = True, on_delete = models.CASCADE)
    name = models.CharField(max_length=64, null = True, default=User.username)
    email = models.CharField(max_length=64, null = True, default='Email not entered')
    intro = models.CharField(max_length=512, null = True, default='Put your intro here')
    imguploaded = models.IntegerField(null = True)
    profile_pic = models.ImageField(null = True, blank = True)
    date_create = models.DateTimeField(auto_now_add= True, null = True)
    
    def __str__(self):
        return self.name