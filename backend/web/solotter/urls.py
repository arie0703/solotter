from django.urls import path, include
from .views import ListPost, ListCategory, DetailPost, CreatePost
from rest_framework import routers

urlpatterns = [
    path('<int:pk>/', DetailPost.as_view()),
    path('', ListPost.as_view()),
    path('post', CreatePost.as_view()),
    path('category', ListCategory.as_view()),
]

