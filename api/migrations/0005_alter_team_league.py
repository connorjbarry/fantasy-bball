# Generated by Django 4.0.5 on 2022-06-24 13:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_season_season'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='league',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='api.league'),
        ),
    ]
