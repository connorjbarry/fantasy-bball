# Generated by Django 4.0.5 on 2022-06-21 14:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_league'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='league',
            name='password',
        ),
        migrations.AddField(
            model_name='league',
            name='league_name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='league',
            name='league_password',
            field=models.CharField(default='', max_length=16, unique=True),
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=50, unique=True)),
                ('team_name', models.CharField(max_length=50)),
                ('user_email', models.EmailField(max_length=100)),
                ('league', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.league')),
            ],
        ),
    ]
