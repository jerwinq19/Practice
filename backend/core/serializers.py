# serializers
from rest_framework import serializers
from .models import Sample, CustomUser
# from django.contrib.auth.models import User

# sample serializer
class SampleSerialziers(serializers.ModelSerializer):
    class Meta:
        model = Sample
        fields = '__all__'
        
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'password', 'first_name', 'last_name', 'email', 'nickname', 'bio')