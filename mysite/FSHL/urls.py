from . import views
from django.urls import path
from rest_framework import routers

app_name = 'FSHL'

router = routers.DefaultRouter()
router.register('category', views.CategoryViewSet, basename='Category')
router.register('thing', views.ThingViewSet, basename='Thing')
router.register('user', views.UserModelViewSet, basename='User')
# router.register('login', views.IssueToken, basename='Token')

urlpatterns = [path('login', views.issue_token, name='issue_token')]

urlpatterns += router.urls
