# serializers
from rest_framework import serializers
from .models import Sample


# sample serializer
class SampleSerialziers(serializers.ModelSerializer):
    class Meta:
        model = Sample
        fields = '__all__'