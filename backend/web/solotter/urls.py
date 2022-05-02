from django.urls import path, include
from .views import ListPost, ListCategory, DetailPost, CreatePost
from rest_framework import routers

urlpatterns = [
    path('<int:pk>/', DetailPost.as_view()),
    path('posts', ListPost.as_view()),
    path('posts/new', CreatePost.as_view()),
    path('category', ListCategory.as_view()),
]

