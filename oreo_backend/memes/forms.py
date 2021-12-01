from django import forms
from memes.models import Photo


class UploadModelForm(forms.ModelForm):

    class Meta:
        model = Photo
        fields = ('title', 'description', 'image',)
