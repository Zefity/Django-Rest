from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models

from django.core.paginator import Paginator

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

class ThingViewSet(viewsets.ModelViewSet):
    queryset = models.Thing.objects.all()
    serializer_class = serializers.ThingSerializer