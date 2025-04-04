---
layout: page
title: Tattoo Remover
description: Machine learning image to image model that removes tattoos
img: assets/img/projects/tattoo_removal.gif
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

Here is a GIF of some results I achieved blended together so you can see the before and after results:

{% include figure.liquid loading="eager" path="assets/img/projects/tattoo_removal.gif" title="tattoo_results" class="img-fluid rounded z-depth-1" %}

Also note that all of the images above were not part of the training set that was used.

This is a project I really enjoyed and will be working on it more in my free time.
