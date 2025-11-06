# custom queries
from django.urls import path
from . import views

urlpatterns = [
    # Thread END POINTS
    path('thread/', views.ListCreateUserThread.as_view(), name="user_thread"),
    path('thread/<int:pk>/', views.ThreadDetailView.as_view(), name="detail_thread"),
    path('thread/<str:category>/', views.CategoryViewThread.as_view(), name="category_thread_view"),
    path('thread/me/<int:pk>/', views.GetAllUserThread.as_view(), name="all_user_thread"),
    # COMMENTS END POINTS
    path('comment/', views.ListCreateComment.as_view(), name="view_comment"),
    path('comment/<int:pk>/', views.DetailCommentView.as_view(), name="view_detail_comment"),
    path('comment/create/<int:pk>/', views.CreateComment.as_view(), name="create_comment"),
    path('comment/detail/<int:pk>/', views.EditDeleteComment.as_view(), name="edit_delete_comment"),
    # Dashboard Endpoints
    path('dashboard/', views.DashBoardView.as_view(), name="dashboard_view"),
    
    # LOG OUT END POINTS
    path('logout/', views.LogoutView.as_view(), name="logout_view"),
]
