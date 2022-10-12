//TRAVERSING THE DOM
let itemList = document.querySelector("#items")

// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode)
//parentElement

console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = "#f4f4f4"
console.log(itemList.parentElement.parentElement.parentElement)
//childNode

console.log(itemList.childNodes)
console.log(itemList.children)
console.log(itemList.children[1])

itemList.children[1].style.backgroundColor = "yellow";
//firstchild
console.log(itemList.firstChild)
//firstelementchild
console.log(itemList.firstElementChild)
itemList.firstElementChild.style.textContent= "Hello1";

//lastchild
console.log(itemList.lastChild)
//lastelementchild
console.log(itemList.lastElementChild)
itemList.lastElementChild.style.textContent= "Hello4";

//nextsibling
console.log(itemList.nextSibling)
//previoussibling
console.log(itemList.previousSibling)
//previousElementsibling

console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color= "green";
//create element

//create a div

let newdiv = document.createElement('div')
// add a class
newdiv.className = 'Hello'
//add id
newdiv.id = "Hello1"

//add attribute
newdiv.setAttribute('title','Hello Div');
//create text node 
let newDivText = document.createTextNode("Hello World")
//add text to div
newdiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1')
console.log(newdiv)

newdiv.style.fontSize = "32px";

container.insertBefore(newdiv,h1)











