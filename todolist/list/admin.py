from django.contrib import admin
from list.models import User, ListAbstract, List

class UserAdmin(admin.ModelAdmin):
	list_display = ('user_name', 'user_pass')

class ListAbstractAdmin(admin.ModelAdmin):
	list_display = ('user', 'list_name')

class ListAdmin(admin.ModelAdmin):
	list_display = ('list', 'item', 'complete', 'status', 'description', 'expire_date')

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(ListAbstract, ListAbstractAdmin)
admin.site.register(List, ListAdmin)
