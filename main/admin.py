from django.contrib import admin
from .models import *
# Register your models here.

class FishAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'photo')
    list_display_links = ('id','title')
    search_fields = ('title', 'content')


admin.site.register(Fish, FishAdmin)

class BaitAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'photo')
    list_display_links = ('id','title')
    search_fields = ('title', 'content')


admin.site.register(Bait, BaitAdmin)

