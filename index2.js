let form = document.getElementById('addForm')
let itemList = document.getElementById("items");
let filter = document.getElementById("filter")
//form submit event
form.addEventListener('submit',addItem)
function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value 
    let newItem1= document.getElementById('item1').value 
    //create new li tag
    let li = document.createElement("li");

    //add class
    li.className = "list-group-item";
   //appending
    li.appendChild(document.createTextNode(newItem))
   li.appendChild(document.createTextNode(newItem1))

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

//filter event
filter.addEventListener("keyup",filterItems)

//filter functionality

function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
   let items = itemList.getElementsByTagName("li");
   //convert to an array
   Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1 ){
        item.style.display ="block"
        
    }else{
        item.style.display = "none";
        
    }
   })
}







