from django.shortcuts import render
from projects.models import Category, Project, Image
from website.forms import ContactForm


# Create your views here.

# Initial page, There is a "projecList.html" but it is the home
def homePage(request):
    categories = Category.objects.all()
    projects = Project.objects.all()
    return render(request, 'projectList.html',{
        'categories':categories,
        'projects':projects
    })

# Detail images and description for any project.
def detail(request, pk):
    project = Project.objects.get(name=pk)
    images = Image.objects.all().filter(project=project)
    return render(request, 'projectDetail.html',{
        'images':images,
        'detail':project
    })

#contact page
def contact(request):
    form = ContactForm()
    if request.method == "POST":

        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()



            return render(request, "contact_thanks.html", {"name":request.POST["name"]})
        else:
            print("PROBLEM")

    context ={"form":form}
    return render(request, "contact.html", context)


