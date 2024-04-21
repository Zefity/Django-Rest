from .models import UserModel

def create_fshl_user(username, email, password, phone_number, adress):
    user = UserModel.objects.create_user(
        username=username,
        email=email,
        password=password,
        phone_number=phone_number,
        adress=adress
        )
    return user