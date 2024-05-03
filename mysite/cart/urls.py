from django.urls import path

from .views import basket_add, basket_list

app_name = 'cart'

urlpatterns = [
    path('basket/add/<thing_id>', basket_add, name='basket_add'),
    path('basket/list/', basket_list, name='basket_list'),
]
