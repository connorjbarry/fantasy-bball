from django.urls import path
from .views import *

urlpatterns = [
    path('season', SeasonView.as_view()),
    path('leagues', LeagueView.as_view()),
    path('team', TeamView.as_view()),
    path('get-league', GetLeague.as_view()),
    path('create-league', CreateLeagueView.as_view()),
    path('get-team', GetTeam.as_view()),
    path('create-team', CreateTeamView.as_view()),
    path('get-team-by-league', GetTeamByLeague.as_view()),
]
