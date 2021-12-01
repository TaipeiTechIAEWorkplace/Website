from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic

def index(request):
    return render(request, 'index.html',{
    })