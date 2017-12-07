function writeKata(kata, solution) {
    var title = document.createElement('h2');
    title.appendChild(document.createTextNode(""));

    var anchor = document.createElement('a');
    anchor.appendChild(document.createTextNode(kata.title));
    anchor.title = kata.title;
    anchor.href="http://evolutionaryarchitecture.com/ffkatas/kata?id=" + kata.id;
    title.appendChild(anchor);
		     

   var desc = document.createElement('p');
   desc.appendChild(document.createTextNode(kata.description));

   var displayList = document.createElement('ul');
   var item = document.createElement('li');
   item.appendChild(document.createTextNode("Scope: " + kata.scope));
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
    

    var slnTitle = document.createElement('h2');
    slnTitle.appendChild(document.createTextNode("Solution(s):"));
    var slnList = document.createElement('ul');
    for (s = 0; s < kata.solution.length; s++) {
	var slnItem = document.createElement('li');
	slnItem.appendChild(document.createTextNode(kata.solution[s]))
	slnList.appendChild(slnItem);
    }

    
    if (solution) {
	var slnDiv = document.getElementById("solution");
	slnDiv.appendChild(slnTitle);
	slnDiv.appendChild(slnList);

	displayDiv.appendChild(slnDiv);
    }

}
