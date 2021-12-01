from django.contrib import admin
from .models import Photo, tag

# Register your models here.
admin.site.register(Photo)
admin.site.register(tag)
