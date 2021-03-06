# Generated by Django 4.0.5 on 2022-06-24 22:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=30)),
                ('description', models.TextField(default='')),
                ('image', models.CharField(default='', max_length=600)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created', to='projects.category')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=30)),
                ('url', models.CharField(default='', max_length=600)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created', to='projects.project')),
            ],
        ),
    ]
