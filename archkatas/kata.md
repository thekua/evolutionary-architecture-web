---
layout: article
---

<h1>Architectural Katas</h1>

<script src="kata_util.js"></script>

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
{% for katas in site.data.katas %}
{% assign k = katas[1] %}
      { id: "{{ katas[0] }}", title: "{{ k.title }}", description: "{{ k.description }}", users: "{{ k.users }}", requirements: [{% for i in k.requirements %} "{{ i }}"{% unless forloop.last %},{% endunless %}{% endfor %}], context: [{%for i in k.context %} "{{ i }}"{% unless forloop.last %},{% endunless %}{% endfor %}] } {% unless forloop.last %},{% endunless %}{% endfor %}
];

document.addEventListener('DOMContentLoaded', function() {
   for (i = 0; i < katas.length; i++) 
      if ( katas[i].id == QueryString.id) 
      	 writeKata(katas[i]);
});	  

</script>

<div id="display" />


