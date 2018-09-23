from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import QuizSet

# Create your views here.
def index(request):
    return render(request, 'quiz/index.html', {})

def link(request, link):
    try:
        quiz = QuizSet.objects.get(link_text=link)
    except QuizSet.DoesNotExist:
        return HttpResponseRedirect(reverse('quiz:index'))
    html = 'quiz/' + link + '.html'
    return render(request, html, {})
    