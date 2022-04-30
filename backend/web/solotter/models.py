from django.db import models
from django.utils import timezone

# Create your models here.

class Category(models.Model):

    class Meta:
        app_label = 'solotter'

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Post(models.Model):

    class Meta:
        app_label = 'solotter'


    body = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.body
