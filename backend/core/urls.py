# custom queries
from django.urls import path
from . import views

urlpatterns = [
    path('thread/', views.ListCreateThread.as_view(), name="create_thread"),
    path('thread/<int:pk>/', views.DeleteUpdateThread.as_view(), name="create_thread"),
]
