function writeKata(kata) {
    var title = document.createElement('h2');
   title.appendChild(document.createTextNode(kata.title));

   var desc = document.createElement('p');
   desc.appendChild(document.createTextNode(kata.description));

   var displayList = document.createElement('ul');
   var item = document.createElement('li');
   item.appendChild(document.createTextNode("Users: " +kata.users));
   displayList.appendChild(item);
   var reqs = document.createElement('li');
   reqs.appendChild(document.createTextNode("Requirements:"));
   displayList.appendChild(reqs);
   
    var list = document.createElement('ul');
    for (j =0; j < kata.requirements.length; j++) {
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(kata.requirements[j]));
       list.appendChild(item);
     }
    displayList.appendChild(list);

    var contextText = document.createElement('li');
    contextText.appendChild(document.createTextNode("Additional Context:"));
    displayList.appendChild(contextText);
    var contextList = document.createElement('ul');
    for (c = 0; c < kata.context.length; c++) {
	var item = document.createElement('li');
	item.appendChild(document.createTextNode(kata.context[c]));
	contextList.appendChild(item);
    }
    displayList.appendChild(contextList);
   var displayDiv = document.getElementById("display");
   displayDiv.appendChild(title);
   displayDiv.appendChild(desc);
   displayDiv.appendChild(displayList);
}
