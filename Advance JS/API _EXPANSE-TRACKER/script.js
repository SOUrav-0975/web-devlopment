
 function save(e){
    e.preventDefault();

    let amount = document.getElementById("amount");
    let desc = document.getElementById("desc");
    let categ= document.getElementById("categ");

   if(amount.value === "" || desc.value===""||categ.value===""){
    alert("plese enter all the fields correctly");
    return;
   }


    let obj = {
        amount : amount.value,
        desc : desc.value,
        categ : categ.value,
    }
    axios.post('https://crudcrud.com/api/c4e04a1ce7d14ee9b140b11382c35d3d/expanse-tracker',obj)
    .then((res)=>{
        showData(res.data)
        console.log(res);
    })
    .catch((err) => {
       console.log(err)
    })
    
 }


  window.addEventListener("DOMContentLoaded",() =>{
        
            axios.get("https://crudcrud.com/api/c4e04a1ce7d14ee9b140b11382c35d3d/expanse-tracker")
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
   
    document.getElementById('amount').value="";
    document.getElementById('desc').value="";
    document.getElementById('categ').value="";

    const parentNode=document.getElementById("listOfData");
    const childHTML=` <tr id=${user._id}>
    <td>${user.amount}</td>
    <td>${user.desc}</td>
    <td>${user.categ}</td>
    <td><button type= "button" class="btn btn-warning mt-2" onclick= editUser('${user.amount}','${user.desc}','${user.categ}','${user._id}')> Edit</button></td>
    <td><button type= "button" class="btn btn-danger mt-2" onclick = deleteUser('${user._id}')>delete</button></td>
  </tr>`
    parentNode.innerHTML += childHTML;
        
  }
  //edit details
function editUser(amount,desc,categ,id){
 
    document.getElementById('amount').value=amount;
    document.getElementById('desc').value=desc;
    document.getElementById('categ').value=categ;
    deleteUser(id)
  }
  

  //delete
  function deleteUser(id) {
   axios.delete(`https://crudcrud.com/api/c4e04a1ce7d14ee9b140b11382c35d3d/expanse-tracker/${id}`)
    .then((res)=>{
    
      removeUser(id);
      
      console.log(res);  
  })
  .catch((err) => {
     console.log(err)
  })
};
function removeUser(id){
  const parentNode = document.getElementById("listOfData");
  const deleteItems = document.getElementById("id");
  if(deleteItems){
    parentNode.removeChild(deleteItems);
    
  }
 
}

