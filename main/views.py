from django.shortcuts import render
from .models import *
# Create your views here.


def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def bait(request):
    bait = Bait.objects.all()
    return render(request, 'bait.html', {'bait': bait})

def feeding_up(request):
    return render(request, 'feeding_up.html')

def fish(request):
    fish = Fish.objects.all()
    return render(request, 'fish.html', {'fish': fish})

def football_team(request):
    return render(request, 'football_team.html')