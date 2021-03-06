# Generated by Django 3.2.6 on 2021-12-01 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('memes', '0002_auto_20211103_2309'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=models.ImageField(upload_to='memes/'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='tags',
            field=models.ManyToManyField(blank=True, to='memes.tag'),
        ),
    ]
