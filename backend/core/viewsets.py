# viewsets
# DRF
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
# Models
from .models import CustomUser
from .serializers import UserSerializers

class UserViewSets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers
    permission_classes = [AllowAny]