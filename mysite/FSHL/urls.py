from . import views
from django.urls import path
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Category', views.CategoryViewSet)
router.register('Thing', views.ThingViewSet)
router.register('UserModel', views.UserModelViewSet)

app_name = 'FSHL'

urlpatterns = [path('api/login', views.issue_token, name='issue_token')]

urlpatterns += router.urls
