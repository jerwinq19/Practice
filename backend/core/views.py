from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from django.contrib.auth import login, logout, authenticate

# register view
@api_view(['GET', 'POST'])
def RegisterView(req):
    if req.method == 'POST':
        try:
            username = req.data['username']
            password = req.data['password']
            first_name = req.data['firstname']
            last_name = req.data['lastname']
            email = req.data['email']
            
            CustomUser.objects.create_user(
                username=username,
                password=password,
                first_name=first_name,
                last_name=last_name,
                email=email
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "successfully registered"}, status=status.HTTP_201_CREATED)
    return Response({"message": "ok"}, status=status.HTTP_200_OK)

# log in view
@api_view(['GET', 'POST'])
def LoginView(req):
    if req.method == 'POST':
        try:
            data = req.data
            user = authenticate(req, username=data.get('username'), password=data.get('password'))
            if user is not None:
                print("login")
                return Response({"message": "successfull login"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    return Response({"message": "ok"}, status=status.HTTP_200_OK)

