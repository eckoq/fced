# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from .models import User

# Create your views here.
def main(request):
    return render(request, 'main.html')

@login_required
def index(request):
    return render(request, 'index.html')

@login_required
def download(request):
    return render(request, 'download.html')

@login_required
def contact(request):
    return render(request, 'contact.html')

def do_login(request):
    if request.method == "POST":
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        message = "用户名和密码字段必须填写！"

        username = username.strip()
        auth_user = authenticate(username=username, password=password)
        if auth_user is not None:
            try:
                login(request, auth_user)
                return redirect('/overview/index/')
            except:
                message = "登录失败！"
        else:
            message = "用户名、密码不正确！"

        return render(request, 'main.html', {"message": message})
    return render(request, 'main.html')

@login_required
def do_login_out(request):
    logout(request)
    return render(request, 'main.html')
