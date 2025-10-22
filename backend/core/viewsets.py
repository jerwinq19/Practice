# viewsets
from rest_framework import viewsets
from .models import Sample, CustomUser
from .serializers import SampleSerialziers, UserSerializers

class SampleViewSets(viewsets.ModelViewSet):
    queryset = Sample.objects.all()
    serializer_class = SampleSerialziers
    
class UserViewSets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializers