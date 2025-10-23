from rest_framework import generics
from rest_framework.response import Response
from .serializers import ThreadSerializer, CommentSerializers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .models import CustomUser, Comment, Thread

# api views

class ListCreateThread(generics.ListCreateAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    # permission_classes = [IsAuthenticated]


class DeleteUpdateThread(generics.RetrieveUpdateDestroyAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    # permission_classes = [IsAuthenticated]
    
