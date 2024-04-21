from django.contrib import admin
from . import models
from django.contrib.auth.admin import UserAdmin

class UserModelAdmin(UserAdmin):
    pass

admin.site.register(models.Category)
admin.site.register(models.Thing)
admin.site.register(models.UserModel, UserModelAdmin)
