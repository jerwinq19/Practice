from django.contrib import admin
from .models import CustomUser, Sample

admin.site.register(Sample)
admin.site.register(CustomUser)