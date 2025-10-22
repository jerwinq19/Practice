from django.contrib import admin
from .models import CustomUser, Sample, Comment, Thread

admin.site.register(Sample)
admin.site.register(CustomUser)
admin.site.register(Comment)
admin.site.register(Thread)
