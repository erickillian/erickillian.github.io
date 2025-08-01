---
layout: page
title: Tattoo Remover
description: Machine learning image to image model that removes tattoos
img: assets/img/projects/tattoo_remover.png
importance: 1
category: fun
related_publications: false
---

While taking classes in Machine Learning in school, I was looking for a fun side
project model to work on in parallel to learning in my classes.

I ended up finding the project [SkinDeep](https://github.com/vijishmadhavan/SkinDeep)
an open souce project on github that attempted to remove tattoos from people.

After using the model I instantly noticed some limitations and started tinkering by creating models
and datasets of my own to see If I could do better.

This lead me down a path of creative techniques in synthetic dataset generation and
various unet architectures and learning more in-depth frameworks like pytorch, tensorflow, and
jax.

To showcase some progress I created a github repo with some code to run a model I trained with
the model weights published on huggingface. [Checkout my Github repo here](https://github.com/erickillian/tattoo-remover)

Here are some example results I have from my latest model that has improved upon the process:

{% assign image_list = "1.jpg,2.jpg,3.jpg,4.jpg,5.jpg,6.jpg,7.jpg" | split: "," %}

<div style="display: flex; flex-wrap: wrap; gap: 1em;">
  {% for image in image_list %}
    <img src="/assets/img/projects/tattoo_remover_examples/{{ image }}" alt="Tattoo remover example {{ forloop.index }}" class="img-fluid rounded z-depth-1" style="max-width: 100%; height: auto; flex: 1 1 300px; margin-bottom: 1em;">
  {% endfor %}
</div>

Also note that all of the images above were not part of the training set that was used.

This is a project I really enjoyed and will be working on it more in my free time.
