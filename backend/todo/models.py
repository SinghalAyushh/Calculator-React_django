
from django.db import models


class Postt(models.Model):
    operation = models.CharField(max_length=455)
    result = models.CharField(max_length=1045)
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.operation
   