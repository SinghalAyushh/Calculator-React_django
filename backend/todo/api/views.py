from rest_framework import viewsets
from todo.models import Postt
from .serializers import PostSerializer
from rest_framework.parsers import FileUploadParser
  
class TodoView(viewsets.ModelViewSet):      
      serializer_class = PostSerializer         
      queryset = Postt.objects.all()
      parser_class = (FileUploadParser,)  
