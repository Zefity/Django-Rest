from rest_framework.serializers import Serializer, ModelSerializer, CharField
from rest_framework.authtoken.models import Token
from phonenumber_field.serializerfields import PhoneNumberField

from . import models

class UserModelSerializer(ModelSerializer):

    class Meta:
        model = models.UserModel
        fields = ['id', 'username', 'email', 'adress', 'phone_number']

class RegisterSerializer(ModelSerializer):
    
    number = PhoneNumberField(region="RU")
    class Meta:
        model = models.UserModel
        fields = ['id', 'username', 'password', 'email', 'adress', 'number']
        extra_kwargs = { 'password' : { 'write_only': True } }
        manager = models.UserManager()

    def create(self, validated_data):
        if 'number' in validated_data:
            user = models.UserModel.objects.create_user(
                validated_data['username'], 
                validated_data['email'], 
                validated_data['password'], 
                validated_data['adress'],
                validated_data['number']
                )
            return user

class CategorySerializer(ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

class ThingSerializer(ModelSerializer):
    class Meta:
        model = models.Thing
        fields = '__all__'
