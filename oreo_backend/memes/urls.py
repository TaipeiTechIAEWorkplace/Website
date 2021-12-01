from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='memes'),
    path('photoUpload', views.photoUpload, name='photoUpload'),
    path('picture', views.bpicture, name='picture'),
]