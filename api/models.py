from django.db import models
from datetime import date
import random
import string

# Create your models here.
DEFAULT_SEASON_ID = 1


def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if League.objects.filter(code=code).count() == 0:
            break
    return code


class Season(models.Model):
    year = models.IntegerField(null=False, default='')


class League(models.Model):
    season = models.ForeignKey(
        Season, related_name="season", default=DEFAULT_SEASON_ID, on_delete=models.CASCADE)
    league_name = models.CharField(max_length=50, default='')
    league_password = models.CharField(max_length=16, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    code = models.CharField(
        max_length=8, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, default='')
    num_teams = models.IntegerField(default=0)


class Team(models.Model):
    user = models.CharField(max_length=50, unique=True)
    team_name = models.CharField(max_length=50)
    user_email = models.EmailField(max_length=100)
    league = models.ForeignKey(League, default='', on_delete=models.CASCADE)
