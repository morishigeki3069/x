from django.urls import path
from .views      import a1view
from .views      import page01
from .views      import page02
urlpatterns = [
    path(        '',a1view.as_view()),
    path('1/',page01.as_view()),
    path('2/',page02.as_view()),
    
    
]
