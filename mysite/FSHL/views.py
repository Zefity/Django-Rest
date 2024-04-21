from rest_framework.decorators import permission_classes, authentication_classes, action, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework import viewsets, status, generics, permissions
from . import serializers

from . import models
from .utils import create_fshl_user

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

class ThingViewSet(viewsets.ModelViewSet):
    queryset = models.Thing.objects.all()
    serializer_class = serializers.ThingSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def get_user_data(request):
    user = request.user
    serializer = serializers.UserModelSerializer(user)
    return Response(serializer.data)

# @api_view(['GET', 'POST'])
# def registration(request):
#     new_user = create_fshl_user(username=request.data["username"], 
#                                 email=request.data["email"], 
#                                 password=request.data["password"], 
#                                 phone_number=request.data["phone_number"], 
#                                 adress=request.data["adress"]
#                                 )
#     # serializer = serializers.UserModelSerializer(new_user)
#     # return Response(serializer.data)
#     return Response(status)


class RegisterAPI(generics.GenericAPIView):
    serializer_class=serializers.RegisterSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        return Response({
            "user": serializers.UserModelSerializer(user, context=self.get_serializer_context()).data
            })
     



# @action(detail=True, methods=['post', 'get'])
# # @permission_classes([IsAuthenticated])
# # @authentication_classes([JWTAuthentication])
# class UserModelViewSet(viewsets.ModelViewSet):
#     serializer_class = serializers.UserModelSerializer

