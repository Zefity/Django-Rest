from django.db import models
from FSHL.models import UserModel, Thing

class Cart(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name="carts")
    thing = models.ForeignKey(Thing, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.thing.name} | {self.user.username}"
