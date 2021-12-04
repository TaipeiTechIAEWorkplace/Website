from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='memes'),
    path('upload', views.upload, name='upload'),
    path('picture/<str:pk>/', views.picture, name='picture'),
]