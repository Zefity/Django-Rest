from rest_framework import serializers
from . import models

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

class ThingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Thing
        fields = '__all__'
