from django.http import HttpResponse
from django.views.generic import TemplateView
from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.http import HttpResponseNotFound
from .models import Task
from .forms import TaskForm
from rest_framework import serializers
from django.core import serializers as core_serializers
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

# изменение статуса задачи
def changeStatus(request, id):
    try:
        task = Task.objects.get(id=id)
        if task.status == "active":
            task.status = "completed"
        else:
            task.status = "active"
        task.save()
        return HttpResponseRedirect("/")
    except Task.DoesNotExist:
        return HttpResponseNotFound("<h2>Task not found</h2>")

# изменение задачи
def changeTaskContent(request, id):
    try:
        if request.method == "POST":
            task = Task.objects.get(id=id)
            task.content = request.POST.get("text")
            task.save()
        return HttpResponseRedirect("/")
    except Task.DoesNotExist:
        return HttpResponseNotFound("<h2>Task not found</h2>")



def create1(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = TaskForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            status = "active"
            p = TaskForm(content=content, status=status)
            p.save()
            # redirect to a new URL:
        return HttpResponseRedirect('/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = TaskForm()

    return render(request, 'index.html', {'form': form})


def postFriend(request):
    # request should be ajax and method should be POST.
    if request.is_ajax and request.method == "POST":
        # get the form data
        form = TaskForm(request.POST)
        # save the data and after fetch the object in instance
        if form.is_valid():
            #status = "active"
            #p = TaskForm(content=content, status=status)
            #p.save()

            instance = form.save()
            # serialize in new friend object in json
            ser_instance = core_serializers.serialize('json', [ instance, ])
            # send to client side.
            return JsonResponse({"instance": ser_instance}, status=200)
        else:
            # some form errors occured.
            return JsonResponse({"error": form.errors}, status=400)

    # some error occured
    return JsonResponse({"error": ""}, status=400)

########################################

def create_post(request):
    posts = Task.objects.all()
    response_data = {}

    #if request.POST.get('action') == 'post':
    content = request.POST.get('content')
        #status = request.POST.get('description')

    response_data['content'] = content
    response_data['status'] = 'active'

    h = Task.objects.create(
            content = content,
            status = 'active',
            )
    response_data['id'] = h.id
    return JsonResponse(response_data)
    """ if request.POST.get('action') == 'delete':
                idt = request.POST.get('id')
                t = Task.objects.get(id=idt)
                t.delete()
                return JsonResponse(response_data) """

    #return render(request, 'test.html', {'task':posts})

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