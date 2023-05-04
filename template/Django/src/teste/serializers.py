from rest_framework import serializers
from .models import Teste


class TesteSerializers(serializers.ModelSerializer):
    class Meta:
        model = Teste
        fields = ['name', 'description']