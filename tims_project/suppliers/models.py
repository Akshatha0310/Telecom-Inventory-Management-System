from django.db import models

class Supplier(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=15)
    email = models.EmailField()

    def __str__(self):
        return self.name
