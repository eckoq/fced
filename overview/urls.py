from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.main, name='main'),
    url(r'^overview/index', views.index, name='index'),
    url(r'^overview/download', views.download, name='download'),
    url(r'^overview/contact', views.contact, name='contact'),
    url(r'^overview/do_login', views.do_login, name='do_login'),
    url(r'^overview/do_login_out', views.do_login_out, name='do_login_out'),
    url(r'^overview/main_page', views.main_page, name='main_page'),
]
