# Generated by Django 3.2.6 on 2021-12-04 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_remove_member_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='imguploaded',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='intro',
            field=models.CharField(blank=True, default='Intro not entered', max_length=512, null=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='likes',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
