# viewsets
from rest_framework import viewsets
from .models import Sample, CustomUser, Comment, Thread
from .serializers import SampleSerialziers, UserSerializers, CommentSerializers, ThreadSerializer

class SampleViewSets(viewsets.ModelViewSet):
    queryset = Sample.objects.all()
    serializer_class = SampleSerialziers
    
class UserViewSets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers

class CommentViewSets(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializers
    
class ThreadViewSets(viewsets.ModelViewSet):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer