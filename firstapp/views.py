from django.http import HttpResponse
from django.views.generic import TemplateView
from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.http import HttpResponseNotFound
from .models import Task
from .forms import TaskForm
from django.http import JsonResponse


# получение данных из бд
def index(request):
    task = Task.objects.all()
    return render(request, "index.html", {"task": task})


# создание задачи
def create_task(request):
    response_data = {}
    content = request.POST.get('content')
    response_data['content'] = content
    response_data['status'] = 'active'

    new_task = Task.objects.create(
            content = content,
            status = 'active',
            )
    response_data['id'] = new_task.id
    return JsonResponse(response_data)

# удаление задачи
def delete_task(request):
    response_data = {}
    id_task = request.POST.get('id')
    t = Task.objects.get(id=id_task)
    t.delete()
    return JsonResponse(response_data)

# удаление всех выполненных задач
def clear_completed_tasks(request):
    posts = Task.objects.all()
    response_data = {}
    completed_tasks = Task.objects.filter(status='completed')
    for t in completed_tasks:
       t.delete()
    return JsonResponse(response_data)

# изменение задачи
def change_task_content(request):
    response_data = {}
    id_task = request.POST.get('id')
    task = Task.objects.get(id=id_task)
    task.content = request.POST.get('content')
    task.save()
    response_data['content'] = task.content
    return JsonResponse(response_data)

# изменение статуса задачи
def change_status(request):
    response_data = {}
    id_task = request.POST.get('id')
    task = Task.objects.get(id=id_task)
    if task.status == "active":
        task.status = "completed"
    else:
        task.status = "active"
    task.save()
    return JsonResponse(response_data)