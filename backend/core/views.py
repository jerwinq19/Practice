# DRF 
from rest_framework.permissions import IsAuthenticated
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

'''
    THREAD API END POINTS
'''

class ListCreateUserThread(generics.ListCreateAPIView):
    '''
        THIS ENDPOINT
        api/thread/
        retrive all the threads created by the all user
    '''
    # permission_classes = [IsAuthenticated]    
    
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer

class ThreadDetailView(generics.RetrieveUpdateDestroyAPIView):
    '''
        THIS ENDPOINT
        api/thread/<int:pk>/
        retrive, update, and delete thread via pk (primary key)
    '''
    permission_classes = [IsAuthenticated]
    
    serializer_class = ThreadSerializer
    queryset = Thread.objects.all()

class CategoryViewThread(generics.ListAPIView):
    '''
        THIS ENDPOINT 
        api/thread/<str:category>/
        retrives all the thread with the same category
    '''
    permission_classes = [IsAuthenticated]
    
    lookup_field = 'category'
    serializer_class = ThreadSerializer
    
    def get_queryset(self, *args, **kwargs):
        '''
            args returns the HTTP access like data, headers, query params
            kwargs return the url parameters
        '''
        
        return Thread.objects.filter(category=self.kwargs['category'])
    
'''
    COMMENTS VIEWS
'''

class ListCreateComment(generics.ListCreateAPIView):
    '''
        THIS ENDPOINT 
        api/comment/<int:pk>/ or api/comment/  
        list and create comments
    '''
    # permission_classes = [IsAuthenticated]
    
    serializer_class = CommentSerializers
    queryset = Comment.objects.all()
    
    def create(self, request, *args, **kwargs):
        '''
            counts user comments if it exceeds 3 it will block it from commenting
        '''
        if Comment.objects.filter(author=self.request.user, thread=request.data.get('thread')).count() >= 3:
            return Response({"message": "Limit reached."}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response({
            "message": "Comment Created!"
        },  status=status.HTTP_201_CREATED)
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class EditDeleteComment(generics.RetrieveUpdateDestroyAPIView):
    '''
        THIS ENDPOINT
        api/comment/<int:pk>
        retrive via pk, Edit via pk, and delete via pk
    '''
    
    permission_classes = [IsAuthenticated]
    
    serializer_class = CommentSerializers
    queryset = Comment.objects.all()