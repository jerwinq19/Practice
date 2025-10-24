# viewsets
# DRF
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
# Models
from .models import CustomUser
from .serializers import UserSerializers

class UserViewSets(viewsets.ModelViewSet):
    '''
        Even tho the permission classes is allowany you still need to pass
        the access token to find who is this token tied to too to get the
        current user.
    '''
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['GET'])
    def current_user(self, request):
        '''
            Return the current logged in user
        '''
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)