from django.views.generic import TemplateView

class a1view(TemplateView):
    template_name = "index.html"

class page01(TemplateView):
    template_name = "page01.html"
class page02(TemplateView):
    template_name = "page02.html"
