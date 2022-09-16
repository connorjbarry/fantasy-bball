from opcode import hasconst
from django.shortcuts import render
from rest_framework import generics, status
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class SeasonView(generics.ListAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer


class LeagueView(generics.ListAPIView):
    queryset = League.objects.all()
    serializer_class = LeagueSerializer


class TeamView(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class GetLeague(APIView):
    serializer_class = LeagueSerializer
    lookup_url_kwarg = 'code'

    def get(self, request, format=None):
        code = request.GET.get(self.lookup_url_kwarg)
        if code != None:
            league = League.objects.filter(code=code)
            if len(league) > 0:
                data = LeagueSerializer(league[0]).data
                data['is_host'] = self.request.session.session_key == league[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid League Code'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code Parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class CreateLeagueView(APIView):
    serializer_class = CreateLeagueSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            league_name = serializer.data.get('league_name')
            league_password = serializer.data.get('league_password')
            host = self.request.session.session_key
            queryset = League.objects.filter(host=host)
            if queryset.exists():
                league = queryset[0]
                league.league_name = league_name
                league.league_password = league_password
                league.save(update_fields=[
                            'league_name', 'league_password'])
                return Response(LeagueSerializer(league).data, status=status.HTTP_200_OK)
            else:
                league = League(league_name=league_name,
                                league_password=league_password, host=host)
                league.save()
            return Response(LeagueSerializer(league).data, status=status.
                            HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)


class GetTeam(APIView):
    serializer_class = TeamSerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            team = Team.objects.filter(id=id)
            if len(team) > 0:
                data = TeamSerializer(team[0]).data
                data['is_host'] = self.request.session.session_key == team[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Team Not Found': 'Invalid Team ID'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'ID Parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class GetTeamByLeague(APIView):
    serializer_class = TeamSerializer
    lookup_url_kwarg = 'league_code'

    def get(self, request, format=None):
        league_code = request.GET.get(self.lookup_url_kwarg)
        if league_code != None:
            team = Team.objects.filter(league__code=league_code)
            if len(team) > 0:
                data = TeamSerializer(team[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Team Not Found': 'Invalid League Code'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code Parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class CreateTeamView(APIView):
    serializer_class = CreateTeamSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            team_name = serializer.data.get('team_name')
            user_email = serializer.data.get('user_email')
            host = self.request.session.session_key
            queryset = Team.objects.filter(host=host)
            if queryset.exists():
                team = queryset[0]
                team.team_name = team_name
                team.user_email = user_email
                team.save(update_fields=['team_name', 'user_email'])
                return Response(TeamSerializer(team).data, status=status.HTTP_200_OK)
            else:
                team = Team(team_name=team_name,
                            user_email=user_email, host=host)
                team.save()
            return Response(TeamSerializer(team).data, status=status.
                            HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)
