from django.db import models

class Tag(models.Model):
    tag = models.CharField(max_length=16)

    def __str__(self):
        return self.tag

class Photo(models.Model):
    title = models.CharField(max_length=16)
    tag = models.ManyToManyField(Tag)
    image = models.ImageField(upload_to='image/', blank=False, null=False)
    upload_date = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True, max_length=256)

    def __str__(self):
        return self.title