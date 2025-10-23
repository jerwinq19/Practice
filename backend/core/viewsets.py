# viewsets
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import CustomUser, Comment, Thread
from .serializers import UserSerializers

class UserViewSets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers
    permission_classes = [AllowAny]
    