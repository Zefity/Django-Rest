from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Category', views.CategoryViewSet)
router.register('Thing', views.ThingViewSet)

app_name = 'FSHL'

urlpatterns = []

urlpatterns += router.urls
