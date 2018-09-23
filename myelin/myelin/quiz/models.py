from django.db import models

# Create your models here.
class QuizSet(models.Model):
    link_text = models.CharField(max_length=255)
    
    def __str__(self):
        return self.link_text