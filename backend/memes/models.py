from django.db import models

class tag(models.Model):
    name = models.CharField(max_length = 200)

    def __str__(self):
        return self.name

class Photo(models.Model):
    title = models.CharField(max_length=16)
    uploader = models.CharField(max_length=16, null=True)
    image = models.ImageField(upload_to='memes/', blank=False, null=False)
    upload_date = models.DateTimeField(auto_now_add = True)
    image_description = models.TextField(blank=True, max_length=256)
    tags = models.ManyToManyField(tag)
    

    def __str__(self):
        return self.title