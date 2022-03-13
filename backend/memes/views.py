from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic
from django.core.files.storage import FileSystemStorage
from django.contrib.auth.decorators import login_required

from memes.models import Photo, Tag
from memes.forms import UploadModelForm

def home(request):
    photolist = Photo.objects.all()
    return render(request, 'memes.html',{
        'photos' : photolist
    })

@login_required(login_url='login')
def photoUpload(request):
    template= 'upload.html'
    if request.method == "GET":
        return render(request, template, {'form':UploadModelForm(initial={'uploader':request.user})})

    if request.method == "POST":
        
        form = UploadModelForm(request.POST, request.FILES, initial={'uploader':request.user})
        print(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/memes')
        else:
            print("Fuck")
            print(form)
            return render(request, template, {'form': form})

def picture(request, pk):
    meme = Photo.objects.get(id = pk)
    tags = meme.tags.all()
    return render(request, 'picture.html',{
        'meme' : meme,
        'tags' : tags
    })

@login_required(login_url='login')
def delete_picture(request, pk):
    if request.method == 'POST':
        pic = Photo.objects.get(pk)
        pic.delete()
        return HttpResponseRedirect('memes')