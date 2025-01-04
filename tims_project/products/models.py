from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    stock_level = models.IntegerField()
    reorder_point = models.IntegerField()

    def __str__(self):
        return self.name
