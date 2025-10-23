# custom queries
from django.urls import path
from . import views

urlpatterns = [
    path('thread/', views.ListAllUserThread.as_view(), name="user_thread"),
    path('logout/', views.LogoutView.as_view(), name="logout_view"),
]
