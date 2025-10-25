from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify
import uuid

# custom user model
class CustomUser(AbstractUser):
    nickname = models.CharField(max_length=60, default="")
    bio = models.CharField(max_length=300, default="")

    def __str__(self):
        return f"{self.username} - {self.bio}"
    

class Thread(models.Model):
    
    CATEGORY_CHOICES = (
        ('PERSONAL PROBLEMS', 'PERSONAL PROBLEMS'),
        ('FAMILY PROBLEMS', 'FAMILY PROBLEMS'),
        ('DEPRESSION', 'DEPRESSION'),
    )
    
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='author')
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    is_annony = models.BooleanField(default=False)
    date_posted = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.author} - {self.category}"
    
    

class Comment(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='comment_author')
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    is_annony = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.author} - {self.timestamp}"