import imp
from django.urls import path, include
from .views import StateViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('states', StateViewSet, basename='state')

urlpatterns = [
    path('', include(router.urls)),
]