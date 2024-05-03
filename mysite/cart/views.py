from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes, authentication_classes
from .models import Cart, Thing
from .serializers import CartSerializer
from FSHL.serializers import ThingSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

import json

@permission_classes([IsAuthenticated])
@api_view(['POST', 'GET'])
def basket_add(request, thing_id):
    data = json.loads(request.body.decode('utf-8'))
    

    thing = Thing.objects.get(id=thing_id)
    baskets = Cart.objects.filter(user=request.user, thing=thing)
    user = request.user
    
    

    if not baskets.exists():
        Cart.objects.create(user=request.user, thing=thing)
        serializer = CartSerializer(user=user, thing=thing)

    else:
        basket = baskets.first()
        basket.quantity += 1
        basket.save()
        serializer = CartSerializer(user=user.username, thing=thing)
        serializer.save()
    

    
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
@api_view(['GET', 'POST'])
def basket_list(request):
    user = request.user
    carts = Cart.objects.filter(user=user)
    serializer = CartSerializer(carts, many=True)
    return Response(serializer.data)