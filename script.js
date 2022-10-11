console.dir(document)
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

let items=document.getElementsByClassName('list-group-item')
console.log(items)

items[1].textContent="Hello2"
items[1].style.backgroundcolor ="yellow"


