from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic
from django.core.files.storage import FileSystemStorage

from .models import Photo

def home(request):
    photolist = Photo.objects.all()
    return render(request, 'memes.html',{
        'memes' : photolist
    })

def upload(request):
    if request.method == 'POST' :
        form = photoform(request.POST, request.FILES)
    return render(request, 'upload.html',{
    })

def picture(request, pk):
    meme = Photo.objects.get(id = pk)
    tags = meme.tags.all()
    return render(request, 'picture.html',{
        'meme' : meme,
        'tags' : tags
    })

def delete_picture(request, pk):
    if request.method == 'POST':
        pic = Photo.objects.get(pk)
        pic.delete()
        return HttpResponseRedirect('memes')