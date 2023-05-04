from django.urls import path
from . import views


urlpatterns= [
    path('', views.test_list),
    path('<int:id>', views.test_detail)
] 