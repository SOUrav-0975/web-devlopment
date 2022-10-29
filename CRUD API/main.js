
 function save(e){
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

   if(name.value === "" || email.value===""||phone.value===""){
    alert("plese enter all the fields correctly");
    return;
   }


    let obj = {
        name : name.value,
        email : email.value,
        phone : phone.value,
    }
    axios.post('https://crudcrud.com/api/526a4f07ab944809a77fbe65e7268af0/crud-app',obj)
    .then((res)=>{
        showData(res.data)
        console.log(res);
    })
    .catch((err) => {
       console.log(err)
    })
    
 }
 window.addEventListener("DOMContentLoaded",() =>{
    axios.get("https://crudcrud.com/api/526a4f07ab944809a77fbe65e7268af0/crud-app")
    .then((res) => {
        console.log(res);
        for(var i=0; i< res.data.length;i++){
            showData(res.data[i]);
            
        }
    })
    .catch((err) => {
        console.log(err)
    })
  });


  function showData(user){
   
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";

    const parentNode=document.getElementById("listOfUsers");
    const childHTML=` <tr id=${user._id}>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
    <td><button type= "button" class="btn btn-warning mt-2" onclick= edit('${user._id}')> Edit</button></td>
    <td><button type= "button" class="btn btn-danger mt-2" onclick = deleteUser('${user._id}')>delete</button></td>
  </tr>`
    parentNode.innerHTML += childHTML;
   
     
  }
  

  //delete
  function deleteUser(id) {
   axios.delete(`https://crudcrud.com/api/526a4f07ab944809a77fbe65e7268af0/crud-app/${id}`)
    .then((res)=>{
    
      removeUser(id);
     
      console.log(res);
    
      
  })
  .catch((err) => {
     console.log(err)
  })
};
function removeUser(id){
  const parentNode = document.getElementById("listOfUsers");
  const deleteItems = document.getElementById("id");
  if(deleteItems){
    parentNode.removeChild(deleteItems);
  }
  
}