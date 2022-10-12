let form = document.getElementById('addForm')
let itemList = document.getElementById("items");

//form submit event
form.addEventListener('submit',addItem)
function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value 
    //create new li tag
    let li = document.createElement("li");

    //add class
    li.className = "list-group-item";
   //appending
    li.appendChild(document.createTextNode(newItem))


    //del button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode("Remove"));

    li.appendChild(deleteBtn);
    itemList.appendChild(li)
}

//delete event
itemList.addEventListener('click',removeItem)
//delete function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Item will be deleted ?')){
         let li = e.target.parentElement;
         itemList.removeChild(li)
        }
    }
}












