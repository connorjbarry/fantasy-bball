# Generated by Django 4.0.5 on 2022-06-24 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_league_code'),
    ]

    operations = [
        migrations.AddField(
            model_name='league',
            name='host',
            field=models.CharField(default='', max_length=50),
        ),
    ]
