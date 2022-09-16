# Generated by Django 4.0.5 on 2022-06-24 14:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_league_host'),
    ]

    operations = [
        migrations.AlterField(
            model_name='league',
            name='season',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seasons', to='api.season'),
        ),
    ]