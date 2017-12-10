---
layout: article
---

## Fitness Function Kata

<script src="ffkata_util.js"></script>

<script src="ffkata_util.js"></script>

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


<script type="text/javascript">
   var QueryString = function () {
     // This function is anonymous, is executed immediately and 
     // the return value is assigned to QueryString
     var query_string = {};
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
       var pair = vars[i].split("=");
           // If first entry with this name
       if (typeof query_string[pair[0]] === "undefined") {
         query_string[pair[0]] = decodeURIComponent(pair[1]);
           // If second entry with this name
       } else if (typeof query_string[pair[0]] === "string") {
         var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
         query_string[pair[0]] = arr;
           // If third or later entry with this name
       } else {
         query_string[pair[0]].push(decodeURIComponent(pair[1]));
       }
     } 
       return query_string;
   }();

/* harvest katas from Jekyll storage via Liquid */
   var katas = [
{% for katas in site.data.ffkatas %}
{% assign k = katas[1] %}
       { id: "{{ katas[0] }}", title: "{{ k.title }}", description: "{{ k.description }}", categories: "{{ k.categories }}", requirements: [{% for i in k.requirements %} "{{ i }}"{% unless forloop.last %},{% endunless %}{% endfor %}], context: [{%for i in k.context %} "{{ i }}"{% unless forloop.last %},{% endunless %}{% endfor %}], solution: [{%for i in k.solution %} "{{ i }}"{% unless forloop.last %},{% endunless %}{% endfor %}] } {% unless forloop.last %},{% endunless %}{% endfor %}
];

document.addEventListener('DOMContentLoaded', function() {
   var includeSolution =  QueryString.solution == '1' || QueryString.solution == 'true'
   for (i = 0; i < katas.length; i++) 
      if ( katas[i].id == QueryString.id) 
      	  writeKata(katas[i], includeSolution);
});	  

</script>

<div id="display" />

<hr>

<div id="solution" />



