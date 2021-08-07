from django.db import models

# Create your models here.
class Task(models.Model):
    content = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=20, null=True, blank=True)

