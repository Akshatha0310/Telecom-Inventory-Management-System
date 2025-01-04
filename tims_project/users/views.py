from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
