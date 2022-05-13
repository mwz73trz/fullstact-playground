from rest_framework.viewsets import ModelViewSet
from .serializers import StateSerializer
from .models import State

class StateViewSet(ModelViewSet):
    queryset = State.objects.all()
    serializer_class = StateSerializer
