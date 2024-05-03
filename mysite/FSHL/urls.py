from . import views
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

app_name = 'FSHL'

router = routers.DefaultRouter()
router.register('category', views.CategoryViewSet, basename='Category')
router.register('thing', views.ThingViewSet, basename='Thing')
# router.register('user/create', views.UserModelViewSet, basename='UserCreate')


urlpatterns = [
    path('user/', views.get_user_data, name='user'),
    path('user/registration/', views.RegisterAPI.as_view(), name='user'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('cart/', include('cart.urls')),
]

urlpatterns += router.urls
