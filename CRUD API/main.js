
let details = [];
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

function table(item){
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

   
    axios.post('https://crudcrud.com/api/4f17942c032a4d32be009d2203e0c66f/save_post',data)
    .then((res)=>{
        details.push(data);
        console.log(res);
        table();
    })
    .catch((err) => {
       console.log(err)
    })
  
   name.value = null;
   email.value = null;
    phone.value= null;
    
 }
 window.addEventListener("DOMContentLoaded",() =>{
    axios.get("https://crudcrud.com/api/4f17942c032a4d32be009d2203e0c66f/save_post")
    .then((res) => {
        console.log(res);
        for(var i=0; i< res.data.length;i++){
            details.push(res.data[i]);
            table()
        }
    })
    .catch((err) => {
        console.log(err)
    })
  })