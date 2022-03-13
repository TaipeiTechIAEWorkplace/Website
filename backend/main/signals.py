from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.contrib.auth.models import Group

from .models import Member

def member_profile(sender, instance, created, **kwargs):
    if created:
        group = Group.objects.get(name='member')
        instance.groups.add(group)
        Member.objects.create(user=instance)
        
post_save.connect(member_profile, sender=User)

def member_profile_update(sender, instance, created, **kwargs):
    if created == False:
        group = Group.objects.get(name='member')
        instance.groups.add(group)
        Member.objects.create(user=instance)
        
post_save.connect(member_profile, sender=User)