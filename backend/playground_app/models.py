from django.db import models

class State(models.Model):
    name = models.CharField(max_length=25)
    been_to = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.name}'
