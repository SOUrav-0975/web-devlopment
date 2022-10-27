
//storing details of an object in the array in the localstorage;
let details = [];

function getData(){
    let Data = localStorage.getItem("details");
    if(Data){
        details=JSON.parse(Data)
    }else{
        setData()
    }
};
getData()
function setData(){
    localStorage.setItem("details",JSON.stringify(details))
}


//form design

let form = `<form onsubmit="save(event)">
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name" placeholder="Enter Name...">
  
</div>
<div class="form-group">
  <label for="email">Email</label>
  <input type="email" class="form-control " id="email" placeholder="Enter Email...">
</div>
<div class="form-group">
  <label for="phone">Phone Number</label>
  <input type="number" class="form-control" id="phone" placeholder="Enter Phone No...">
</div>

<button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>`;

//table design

function table(){
    let table = `<table class="table">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone No.</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>`;
      for(let i = 0; i < details.length;i++){
        table = table + ` <tr>
        <th scope="row">${i+1}</th>
        <td>${details[i].name}</td>
        <td>${details[i].email}</td>
        <td>${details[i].phone}</td>
        <td><button type= "button" class="btn btn-warning mt-2" onclick= "edit(${i})"> Edit</button></td>
        <td><button type= "button" class="btn btn-danger mt-2" onclick= "deleteData(${i})">delete</button></td>
      </tr>`
      };
      table += `</tbody>
      </table>`;
      document.getElementById("table").innerHTML=table;
}
table()
document.getElementById("form").innerHTML = form;


//collecting data from form;

 function save(e){
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

   if(name.value === "" || email.value===""||phone.value===""){
    alert("plese enter all the fields correctly");
    return;
   }


    let data = {
        name : name.value,
        email : email.value,
        phone : phone.value,
    }

    details.push(data);
   

    setData()
    console.log(details)
    table();
    name.value = null;
    email.value = null;
    phone.value= null;
 }
//deleting the item;
 function deleteData(index){
    details.splice(index,1);
    setData();
    table();
    console.log(details)
 }
//editing the item;
 function edit(index){
    let editForm = `<form onsubmit="update(event,${index})">
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="text" value="${details[index].name}" class="form-control" id="Name" placeholder="Enter Name...">
      
    </div>
    <div class="form-group">
      <label for="Email">Email</label>
      <input type="email" value="${details[index].email}" class="form-control" id="Email" placeholder="Enter Email...">
    </div>
    <div class="form-group">
      <label for="Phone">Phone Number</label>
      <input type="number" value="${details[index].phone}" class="form-control" id="Phone" placeholder="Enter Phone No...">
    </div>
    
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>`; 
    document.getElementById("form").innerHTML=editForm;
 };
 //updating the item
 function update(e,index){
    e.preventDefault();
      let newName = document.getElementById("Name");
      let newEmail = document.getElementById("Email");
      let newPhone = document.getElementById("Phone");

      details[index]={
        name:newName.value,
        email:newEmail.value,
        phone:newPhone.value

      };
      setData();
      table();

      document.getElementById("form").innerHTML = form;
      console.log(details)
 }