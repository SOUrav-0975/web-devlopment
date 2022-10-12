/*console.dir(document)
console.log(document.domain);
console.log(document.URL);

console.log(document.title);

console.log(document.doctype);

console.log(document.head);

console.log(document.body);
console.log(document.all);
console.log(document.forms[0]);

console.log(document.links);
console.log(document.images);

let headerTitle = document.getElementById('header-title');
headerTitle.innerText="Hello"
console.log(headerTitle.innerText)


headerTitle.style.borderBottom = "solid 2px #000"
*/


//GET ELEMENTBYCLASSNAME
//let items=document.getElementsByClassName('list-group-item')
//console.log(items)

//items[1].textContent="Hello2";
//items[1].style.backgroundColor="yellow";
//items[2].style.backgroundColor= "green"

//for(let i=0;i<items.length;i++){
  //  items[i].style.fontWeight="bold"
//}

//GET ELEMENT BY TAG NAME

let li = document.getElementsByTagName("li")
console.log(li)

console.log(li[1])
li[1].textContent="Hello";
li[1].style.fontWeight="bold";
li[1].style.backgroundColor="red";
li[4].innerText="This is new list items without any class name"
//gives error
//items.style.backgroundColor="#f4f4f4"
//let items=document.getElementsByClassName('list-group-item')
//for(let i=0;i<items.length;i++){
  // items[i].style.backgroundColor="#f4f4f4"
//}