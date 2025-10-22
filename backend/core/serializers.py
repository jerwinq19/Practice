# serializers
from rest_framework import serializers
from .models import Sample, CustomUser, Comment, Thread
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
        
    def create(self, validated_data):
        print('hello')
        user = CustomUser.objects.create_user(**validated_data)
        return user

# comment serializer
class CommentSerializers(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Comment
        fields = ('author','author_name', 'thread', 'content', 'timestamp', 'is_annony')
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.is_annony is True:
            data['author_name'] = "Anonymous"
    

# Threaad serializer
class ThreadSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    comments = CommentSerializers(many=True, read_only=True)
    
    class Meta:
        model = Thread
        fields = ('id', 'category','author','author_name','title', 'content', 'comments', 'is_annony')
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.is_annony is True:
            data['author_name'] = "Anonymous"
        return data