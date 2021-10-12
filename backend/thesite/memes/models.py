from django.db import models

from django.utils import timezone

class Photo(models.Model):
    title = models.CharField(max_length=16)
    image = models.ImageField(upload_to='image/', blank=False, null=False)
    upload_date = models.DateField(default=timezone.now)
    image_description = models.TextField(blank=True, max_length=256)