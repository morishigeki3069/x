from django.views.generic import TemplateView
class a1view(TemplateView):
    template_name = "index.html"

   
class page01(TemplateView):
    template_name = "page01.html"

    def get_context_data(self):
        contx = super().get_context_data()
        
        contx[ "numnum" ] = 123456789
        
        contx[ "questions" ] = [
            100000,100101,100202,100303,100404,100505,100606,
            100707,100808,100909,101010,]
        return contx













class page02(TemplateView):
    template_name = "page02.html"
class page03(TemplateView):
    template_name = "page03.html"
