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
        

# comment serializer
class CommentSerializers(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Comment
        fields = ('author','author_name', 'thread', 'content', 'timestamp', 'is_annony')
    
    
    def get_author_name(self, obj):
        if obj.is_annony:
            return "Anonymous"
        return obj.author.username
    

# Threaad serializer
class ThreadSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    comments = CommentSerializers(many=True, read_only=True)
    
    class Meta:
        model = Thread
        fields = ('id', 'category','author','author_name','title', 'content', 'comments', 'is_annony')
        
    def get_author_name(self, obj):
        if obj.is_annony:
            return "Annonymous"
        return obj.author.username
