from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    def __str__(self) -> str:
        return self.name
    
class Thing(models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=0)
    image = models.ImageField(upload_to='products_images')
    quantity = models.PositiveIntegerField(default=0)
    category = models.ForeignKey(
        Category,
        related_name="thing",
        on_delete=models.PROTECT,
        null=True
    )
    
    def __str__(self):
        return f'Вещь: {self.name} | Категория: {self.category.name}'
    
class UserModel(AbstractUser):
    adress = models.TextField(max_length=600, blank=True)
    phone_number = PhoneNumberField(blank=True)
    