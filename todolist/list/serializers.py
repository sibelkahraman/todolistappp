from rest_framework import serializers
from list.models import User
from list.models import ListAbstract
from list.models import List
import list.views

class UserSerializer(serializers.HyperlinkedModelSerializer):
	'''user_name = serializers.HyperlinkedRelatedField(
		many=True,
		read_only=True,
		view_name='user-detail')'''
	class Meta:
		model = User
		fields = ( 'pk',
				   'user_name',
				   'user_pass')
	
class ListAbstractSerializer(serializers.HyperlinkedModelSerializer):
	#user = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='id')
	#list_name = serializers.HyperlinkedRelatedField(
	#	many=True,
	#	read_only=True,
	#	view_name='list-detail')
	class Meta:
		model = ListAbstract
		fields = (
			'pk',
			'user',
			'list_name',)
		
class ListSerializer(serializers.ModelSerializer):
	#list_id = serializers.SlugRelatedField(queryset=ListAbstract.objects.all(), slug_field='list_name')
	#status = serializers.ChoiceField(choices=List.STATUS)
	class Meta:
		model= List
		fields = (
			'pk',
			'list',
			'item',
			'complete',
			'status',
			'description',
			'expire_date',
			)
		
