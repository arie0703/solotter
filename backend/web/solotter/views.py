from django.shortcuts import render
from rest_framework import generics
from .models import Post
from .models import Category
from .serializers import PostSerializer
from .serializers import CategorySerializer

class ListPost(generics.ListAPIView):
    queryset = Post.objects.order_by('-created_at')
    serializer_class = PostSerializer

class ListCategory(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class DetailPost(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CreatePost(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DeletePost(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class UpdatePost(generics.UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer