# Generated by Django 3.0.5 on 2022-04-29 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solotter', '0002_auto_20220212_2353'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
    ]
