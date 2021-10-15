from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic

def home(request):
    return render(request, 'memes.html',{
    })
def upload(request):
    return render(request, 'upload.html',{
    })
def bpicture(request):
    return render(request, 'picture.html',{
    })