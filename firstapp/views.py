from django.http import HttpResponse
from django.views.generic import TemplateView
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponseNotFound
from .models import Task
from .forms import TaskForm



# получение данных из бд
def index(request):
    task = Task.objects.all()
    return render(request, "index.html", {"task": task})

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

"""from .forms import TaskForm

def create1(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = TaskForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            content = form.cleaned_data['content']
            status = "active"
            p = TaskForm(content=content, status=status)
            p.save()
            # redirect to a new URL:
        return HttpResponseRedirect('/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = TaskForm()

    return render(request, 'index.html', {'form': form})"""