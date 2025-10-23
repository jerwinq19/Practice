# DRF 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
# SERIALIZERS
from .serializers import ThreadSerializer, CommentSerializers
# JWT
from rest_framework_simplejwt.tokens import RefreshToken
# models
from .models import CustomUser, Comment, Thread

# log out 
class LogoutView(APIView):
    '''
        to make the logout
        1. Import the RefreshToken from rest_framework_simplejwt.tokens
        2. Create Logoutview using APIView
        3. Make sure that this 'backend/backend/settings.py'
        4. after that use make and migrate via manage.py
        5. after non i register mo sa urls.py tas access mo na using axios
        6. lastly makesure to pass the refresh_token to logout.
    '''
    def post(self, request):
        try:
            refresh_token = request.data.get('refresh_token')
            if not refresh_token:
                return Response({"message": "No Refresh token provided"}, status=status.HTTP_400_BAD_REQUEST)
            token = RefreshToken(str(refresh_token))
            token.blacklist()
            return Response({"message": "Successfully log out."}, status=status.HTTP_200_OK)
        except Exception as e:
            print(str(e))
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)

'''
    TODOS: 
    1. Gumawa ng End points for Viewing thread by category
    2. Handle Delete, Edit, POST
    3. Limit how user can comment to avoid spam
'''

class ListCreateThread(generics.ListCreateAPIView):
    '''
        ano ginagawa neto?
        si ListCreateAPIView from generics is kaya nya gawin yung 
        pag retrive using pk (id or foriengkey) tas mag create din
    '''
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    permission_classes = [IsAuthenticated]

class DeleteUpdateThread(generics.RetrieveUpdateDestroyAPIView):
    '''
        same lang din as ListCreateView
        pero ang pinag kaiba ito  ay nag uupdate and delete ng Thread
    '''
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    permission_classes = [IsAuthenticated]

