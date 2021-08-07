
from django import forms

class TaskForm(forms.Form):
    content = forms.CharField(widget=forms.TextInput(attrs={"class":"todo-input__input-field"}))
    status = forms.CharField(required=False)
