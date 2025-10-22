# custom queries
from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterView, name="register_view"),
    path('login/', views.LoginView, name="login_view")
]
