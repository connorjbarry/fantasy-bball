# Generated by Django 4.0.5 on 2022-06-28 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_league_num_teams_alter_league_season'),
    ]

    operations = [
        migrations.AlterField(
            model_name='league',
            name='league_password',
            field=models.CharField(default='', max_length=16),
        ),
    ]
