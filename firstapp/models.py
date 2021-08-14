from django.db import models

# Create your models here.
class Task(models.Model):
    content = models.TextField()
    status = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.field_name
