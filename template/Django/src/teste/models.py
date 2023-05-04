from django.db import models

# Create your models here.

class Teste(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False, primary_key=True)
    description = models.TextField(max_length=400, null=True, blank=True)

    def __str_(self):
        return self.name




    
