from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.views import generic
from memes.models import Photo
from memes.forms import UploadModelForm

def photoUpload(request):
    template= 'upload.html'
    if request.method == "GET":
        return render(request, template, {'form':UploadModelForm()})

    if request.method == "POST":
        
        form = UploadModelForm(request.POST, request.FILES)
        print(request.POST, request.FILES)
        if form.is_valid():
            
            form.save()
            return redirect('/memes')
        else:
            print("Fuck")
            print(form)
            return render(request, template, {'form': form})

def home(request):
    return render(request, 'memes.html', {'photos': Photo.objects.all()})

def bpicture(request):
    return render(request, 'picture.html',{
    })