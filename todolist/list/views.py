from list.models import User
from list.models import ListAbstract
from list.models import List
from list.serializers import UserSerializer
from list.serializers import ListAbstractSerializer
from list.serializers import ListSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

class UserList(generics.ListCreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	name = 'user-list'

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	name = 'user-detail'
	
class ListAbstractList(generics.ListCreateAPIView):
	queryset = ListAbstract.objects.all()
	serializer_class = ListAbstractSerializer
	name = 'listabstract-list'

class ListAbstractDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = ListAbstract.objects.all()
	serializer_class = ListAbstractSerializer
	name = 'listabstract-detail'

class ListList(generics.ListCreateAPIView):
	queryset = List.objects.all()
	serializer_class = ListSerializer
	name = 'list-list'

class ListDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = List.objects.all()
	serializer_class = ListSerializer
	name = 'list-detail'

class ApiRoot(generics.GenericAPIView):
	name = 'api-root'
	def get(self, request, *args, **kwargs):
		return Response({
			'user': reverse(UserList.name, request=request),
			'list-abstract': reverse(ListAbstractList.name, request=request),
			'list': reverse(ListList.name, request=request)
			})