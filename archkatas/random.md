---
layout: article
---

<h1>Architectural Katas—Random Kata</h1>

<style>
ul,
ol {
  padding: 0;
  margin: 0 0 10px 25px;
}

ul ul,
ul ol,
ol ol,
ol ul {
  margin-bottom: 0;
}

li {
  line-height: 20px;
      list-style-type: circle;

}

ul.unstyled,
ol.unstyled {
  margin-left: 0;
  list-style: none;
}

</style>




<script src="kata_util.js"></script>

<script type="text/javascript">
/* harvest katas from Jekyll storage via Liquid */
   var katas = [
{% for katas in site.data.katas %}
{% assign k = katas[1] %}
      { id: "{{ katas[0] }}", title: "{{ k.title }}", description: "{{ k.description }}", users: "{{ k.users }}", requirements: [{% for i in k.requirements %} "{{ i }}"{% unless forloop.last %},{% endunless %}{% endfor %}], context: [{%for i in k.context %} "{{ i }}"{% unless forloop.last %},{% endunless %}{% endfor %}] } {% unless forloop.last %},{% endunless %}{% endfor %}
];

  document.addEventListener('DOMContentLoaded', function() {
    writeKata(katas[Math.floor(Math.random() * katas.length)]);
});	  

</script>

<div id="display" />

