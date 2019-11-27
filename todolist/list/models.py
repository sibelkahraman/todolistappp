from django.db import models
from model_utils.fields import StatusField
from model_utils import Choices
import datetime 
from django.utils.timezone import timezone

class User(models.Model):
	user_name = models.CharField(
					max_length=200, 
					unique=True ,
					blank=False, 
					default='user')
	user_pass = models.CharField(
					max_length=100, 
					blank=False, 
					default='123456')
	user_id = models.AutoField(
					auto_created=True,
					primary_key=True)
	
	class Meta:
		ordering = ('user_name',)
	
	def __str__(self):
		return self.user_name
	
class ListAbstract(models.Model):
	user = models.ForeignKey(User,
					default=1,
					on_delete=models.CASCADE)
	list_id = models.AutoField(
					auto_created=True,
					primary_key=True)
	list_name = models.CharField(
					max_length=200, 
					unique=True,
					blank=False, 
					default='list1')
	
	class Meta:
		ordering=('list_name',)
	
	def __str__(self):
		return self.list_name

class List(models.Model):
	START = 'S'
	PROCEED = 'P'
	DONE = 'D'
	STATUS = (
			  (START, ("started")),
			  (PROCEED, ("proceed")),
			  (DONE, ("done")),
			  )
	id = models.AutoField(
					auto_created=True,
					primary_key=True)
	list= models.ForeignKey(ListAbstract,
				default=1,
				on_delete=models.CASCADE)
	item = models.CharField(
					max_length=100,
					unique=False,
					blank=True,
					default='item1')
	complete = models.BooleanField(default=False)
	#dependent = models.
	status = models.CharField(
					max_length=2,
					choices=STATUS,
					default=START,)
	description = models.CharField(
						max_length=200,
						unique=False,
						blank=True,
						default='NULL')
	expire_date = models.DateField(("Date"), default=datetime.date.today, blank=True)
	
	class Meta:
		ordering= ('item',)
	def __str__(self):
		return self.item