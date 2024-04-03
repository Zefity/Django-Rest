from rest_framework.serializers import Serializer, ModelSerializer, CharField
from rest_framework.authtoken.models import Token

from . import models

class UserModelSerializer(ModelSerializer):

    class Meta:
        model = models.UserModel
        fields = ['username', 'first_name', 'last_name', 'email', 'adress', 'phone_number']

class IssueTokenRequestSerializer(Serializer):
    model = models.UserModel

    username = CharField(required=True)
    password = CharField(required=True)


class TokenSeriazliser(ModelSerializer):

    class Meta:
        model = Token
        fields = ['key']

class CategorySerializer(ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

class ThingSerializer(ModelSerializer):
    class Meta:
        model = models.Thing
        fields = '__all__'
