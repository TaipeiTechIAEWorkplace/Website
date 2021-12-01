from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic
from django.contrib import auth

def index(request):
    return render(request, 'index.html',{
    })

def userinfo(request):
    return render(request, 'personal_info.html',{
    })

def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/index/')
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username = username, password = password)
    if user is not None and user.is_active:
        auth.login(request, user)
        return HttpResponseRedirect('/index/')
    else:
            return render(request, 'login.html')