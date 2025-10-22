from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

class Sample(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name}"

# custom user model
class CustomUser(AbstractUser):
    nickname = models.CharField(max_length=60, default="")
    bio = models.CharField(max_length=300, default="")