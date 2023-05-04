from django.shortcuts import render
from .models import Teste
from .serializers import TesteSerializers

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render

# Create your views here.
@api_view(["GET", "POST"])
def test_list(request):
    if request.method == "GET":
        test = Teste.objects.all()
        serializer = TesteSerializers(test,many=True)
        return Response(serializer.data)
    
    if request.method == "POST":
        serializer = TesteSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def test_detail(request, id):
    try:
        test = Teste.objects.get(pk=id)
    except Teste.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = TesteSerializers(test)
        return Response(serializer.data)
    
    elif request.method == "POST":
        serializer = TesteSerializers(test, data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        

    elif request.method == "DELETE":
        test.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
