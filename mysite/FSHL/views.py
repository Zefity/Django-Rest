from rest_framework.decorators import permission_classes, authentication_classes, action, api_view
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.request import Request
from rest_framework.response import Response

from http import HTTPMethod

from rest_framework import viewsets
from . import serializers
from .serializers import IssueTokenRequestSerializer, TokenSeriazliser

from . import models

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

class ThingViewSet(viewsets.ModelViewSet):
    queryset = models.Thing.objects.all()
    serializer_class = serializers.ThingSerializer

@action(detail=True, methods=['post', HTTPMethod.POST])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
class UserModelViewSet(viewsets.ModelViewSet):
    queryset = models.UserModel.objects.all()
    serializer_class = serializers.UserModelSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def issue_token(request: Request):
    serializer = IssueTokenRequestSerializer(data=request.data)
    if serializer.is_valid():
        authenticated_user = authenticate(**serializer.validated_data)
        try:
            token = Token.objects.get(user=authenticated_user)
        except Token.DoesNotExist:
            token = Token.objects.create(user=authenticated_user)
        return Response(TokenSeriazliser(token).data)
    else:
        return Response(serializer.errors, status=400)