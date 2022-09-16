from dataclasses import fields
from rest_framework import serializers
from .models import *


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ('id', 'year')


class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ('id', 'season', 'league_name',
                  'league_password', 'created_at', 'code', 'num_teams')

        # def to_representation(self, instance):
        #     response = super().to_representation(instance)
        #     response['season'] = SeasonSerializer(instance.season).data
        #     return response


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'user', 'team_name', 'user_email', 'league')


class CreateLeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ('league_name', 'league_password')


class CreateTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('team_name', 'user_email')
