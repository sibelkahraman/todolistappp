from django.conf.urls import url
from list import views

urlpatterns = [
	url(r'^user/$',
	views.UserList.as_view(),
	name=views.UserList.name),
	
	url(r'^user/(?P<pk>[0-9]+)/$',
	views.UserDetail.as_view(),
	name=views.UserDetail.name),
	
	
	url(r'^list-abstract/$',
	views.ListAbstractList.as_view(),
	name=views.ListAbstractList.name),
	
	url(r'^list-abstract/(?P<pk>[0-9]+)/$',
	views.ListAbstractDetail.as_view(),
	name=views.ListAbstractDetail.name),
	
	
	url(r'^list/$',
	views.ListList.as_view(),
	name=views.ListList.name),
	
	url(r'^list/(?P<pk>[0-9]+)/$',
	views.ListDetail.as_view(),
	name=views.ListDetail.name),
]
