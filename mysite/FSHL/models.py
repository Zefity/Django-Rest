from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from phonenumber_field.modelfields import PhoneNumberField


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    def __str__(self) -> str:
        return self.name
    
class Thing(models.Model):
    SIZES = {
        "S": "S",
        "M": "M",
        "L": "L",
    }

    COLORS = {
        "White": "White",
        "Black": "Black",
    }

    name = models.CharField(max_length=250, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=0)
    image = models.ImageField(upload_to='products_images')
    quantity = models.PositiveIntegerField(default=0)
    size = models.CharField(max_length=1, choices=SIZES)
    color = models.CharField(max_length=10, choices=COLORS)
    category = models.ForeignKey(
        Category,
        related_name="thing",
        on_delete=models.PROTECT,
        null=True
    )
    
    def __str__(self):
        return f'Вещь: {self.name} | Категория: {self.category.name}'
    

class UserManager(BaseUserManager):
    def create_user(self, username, email, password, adress=None, phone_number=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, adress=adress, phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        return self.create_user(username, email, password, **extra_fields)
    

class UserModel(AbstractUser):
    objects = UserManager()
    adress = models.TextField(max_length=600, blank=True, null=True)
    phone_number = PhoneNumberField(blank=True, null=True)
    