from operator import index
from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('leagues', index),
    path('create', index),
    path('league/<str:leagueCode>', index),
    path('stats', index),
    path('about', index),
    path('league/<str:leagueCode>/create-team', index),
]
