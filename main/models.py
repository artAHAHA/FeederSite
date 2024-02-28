from django.db import models
from django.urls import reverse


# Create your models here.

class Fish(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    photo = models.ImageField(upload_to='images/', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Рыбы'
        verbose_name_plural = 'Рыбы'
        ordering = ['id']


class Bait(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    photo = models.ImageField(upload_to='images/', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Наживка'
        verbose_name_plural = 'Наживка'
        ordering = ['id']

