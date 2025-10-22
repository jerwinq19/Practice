# viewsets
from rest_framework import viewsets
from .models import Sample
from .serializers import SampleSerialziers

class SampleViewSets(viewsets.ModelViewSet):
    queryset = Sample.objects.all()
    serializer_class = SampleSerialziers