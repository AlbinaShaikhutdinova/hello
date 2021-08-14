from django.http import HttpResponse
from django.views.generic import TemplateView
from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.http import HttpResponseNotFound
from .models import Task
from .forms import TaskForm
#from rest_framework import serializers
#from django.core import serializers as core_serializers
from django.http import JsonResponse


# получение данных из бд
def index(request):
    task = Task.objects.all()
    return render(request, "test.html", {"task": task})

# сохранение данных в бд
def create(request):
    if request.method == "POST":
        t = Task()
        t.content = request.POST.get("content")
        t.status = "active"
        t.save()
    return HttpResponseRedirect("/")


# удаление данных из бд
def delete(request, id):
    try:
        t = Task.objects.get(id=id)
        t.delete()
        return HttpResponseRedirect("/")
    except Task.DoesNotExist:
        return HttpResponseNotFound("<h2>Task not found</h2>")

def clear(request):
    completed_tasks = Task.objects.filter(status='completed')
    for t in completed_tasks:
        t.delete()
    return HttpResponseRedirect("/")







########################################

def create_post(request):
    posts = Task.objects.all()
    response_data = {}
    content = request.POST.get('content')
    response_data['content'] = content
    response_data['status'] = 'active'

    h = Task.objects.create(
            content = content,
            status = 'active',
            )
    response_data['id'] = h.id
    return JsonResponse(response_data)

def delete_post(request):
    response_data = {}
    idt = request.POST.get('id')
    t = Task.objects.get(id=idt)
    t.delete()
    return JsonResponse(response_data)

def clear_post(request):
    posts = Task.objects.all()
    response_data = {}
    completed_tasks = Task.objects.filter(status='completed')
    for t in completed_tasks:
       t.delete()
    return JsonResponse(response_data)

# изменение задачи
def changeTaskContent(request):
    response_data = {}
    idt = request.POST.get('id')
    task = Task.objects.get(id=idt)
    task.content = request.POST.get('content')
    task.save()
    response_data['content'] = task.content
    return JsonResponse(response_data)

# изменение статуса задачи
def changeStatus(request):
    response_data = {}
    idt = request.POST.get('id')
    task = Task.objects.get(id=idt)
    if task.status == "active":
        task.status = "completed"
    else:
        task.status = "active"
    task.save()
    return JsonResponse(response_data)