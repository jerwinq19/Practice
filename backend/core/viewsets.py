from rest_framework import viewsets
# Models
from .models import CustomUser
from .serializers import UserSerializers
from rest_framework.decorators import action
from rest_framework.response import Response

class UserViewSets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers

    @action(detail=False, methods=['GET'])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)
