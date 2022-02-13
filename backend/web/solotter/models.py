from django.db import models
from django.utils import timezone

# Create your models here.

class Post(models.Model):

    class Meta:
        app_label = 'solotter'


    body = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.body
