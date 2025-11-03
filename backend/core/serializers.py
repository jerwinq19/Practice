# serializers
from rest_framework import serializers
from .models import CustomUser, Comment, Thread
# from django.contrib.auth.models import User
'''
    tas kung mag babato kayo ng data from front end make sure na katulad na katulad 
    yung name ng fields.
    
        const data = {
            "username": username,
            "password": password,
            "email": email,
            "first_name": firstName,
            "last_name": lastName
        }
        
        example
'''

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('pk','username', 'password', 'email','first_name', 'last_name')
        extra_kwargs = {'password': {"write_only": True}}
    
    # automatically creates a user
    def create(self, validated_data):
        if CustomUser.objects.filter(username=validated_data['username']).exists():
            raise serializers.ValidationError("Username already exists.")
        
        user = CustomUser.objects.create_user(**validated_data)
        return user

# comment serializer
class CommentSerializers(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    class Meta:
        model = Comment
        fields = ('id','author','thread','author_name', 'content', 'timestamp', 'is_annony')
        read_only_fields = ['author', 'thread']
        
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
        fields = ('id','author','category','author_name','title', 'content', 'comments', 'is_annony')
        read_only_fields = ['id','author', 'author_name']  
        
    def get_author_name(self, obj):
        if obj.is_annony:
            return "Annonymous"
        return obj.author.username
