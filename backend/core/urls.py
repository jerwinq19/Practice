# custom queries
from django.urls import path
from . import views

urlpatterns = [
    # Thread END POINTS
    path('thread/', views.ListCreateUserThread.as_view(), name="user_thread"),
    path('thread/<int:pk>/', views.ThreadDetailView.as_view(), name="detail_thread"),
    path('thread/<str:category>/', views.CategoryViewThread.as_view(), name="category_thread_view"),
    # COMMENTS END POINTS
    path('comment/', views.ListCreateComment.as_view(), name="view_create_comment"),
    path('comment/<int:pk>/', views.EditDeleteComment.as_view(), name="edit_delete_comment"),
    
    # LOG OUT END POINTS
    path('logout/', views.LogoutView.as_view(), name="logout_view"),
]
