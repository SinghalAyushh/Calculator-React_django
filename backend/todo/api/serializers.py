from rest_framework import serializers

from todo.models import Postt


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postt
        fields = '__all__'