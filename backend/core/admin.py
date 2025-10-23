from django.contrib import admin
from .models import CustomUser, Comment, Thread

admin.site.register(CustomUser)
admin.site.register(Comment)
admin.site.register(Thread)
