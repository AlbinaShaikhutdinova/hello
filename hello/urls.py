"""hello URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from firstapp import views
 
urlpatterns = [
    path('delete', views.delete_task, name='delete'),
    path('create', views.create_task, name="create"),
    path('', views.index),
    path('clear', views.clear_completed_tasks, name='clear'),
    path('change_status', views.change_status, name='change_status'),
    path('change_task_content', views.change_task_content, name='change_task_content'),
]
