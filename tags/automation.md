---
layout: page
title: automation
permalink: /blog/tags/automation/
---

<h5> Posts by tag : {{ page.title }} </h5>

<div class="card">
{% for post in site.tags.automation %}
 <li class="tag-posts"><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</div>