function details(n,e,p){
    this.name = n;
    this.email = e;
    this.phone = p;
}
let form = document.getElementById("form");
form.addEventListener("submit",getData)
function getData(e){
    e.preventDefault()

let name = form.name.value;
let email = form.email.value;
let phone = form.phone.value;


//use of localStorage to store the user data
let person1 = new details(name,email,phone);
console.log(person1)

let data = JSON.parse(localStorage.getItem("users")) || [];
data.push(person1)

localStorage.setItem("users",JSON.stringify(data))
displayData()

}


function displayData(){
   let data = JSON.parse(localStorage.getItem("users")) || [];
   let container = document.querySelector("tbody")
   container.innerHTML=null;
    data.map(function(el,index){
        let div = document.createElement("tr")
        let td1 = document.createElement("td");
        td1.innerText = el.name;
        let td2= document.createElement("td");
        td2.innerText=el.email;
        let td3= document.createElement("td");
        td3.innerText=el.phone;
        let td4 = document.createElement("td");
        td4.innerText="Edit"
        td4.style.color="#fff";
        td4.style.backgroundColor="yellow";
        td4.style.cursor="pointer"
        td4.onclick=() =>{
           edit (el.name,el.email,el.phone)
          
        }
        let td5 = document.createElement("td");
        td5.innerText="Delete"
        td5.style.backgroundColor="red"
        td5.style.color="#fff";
        td5.style.cursor="pointer"

       td5.onclick=()=>{
        remove(index)
       }


        div.append(td1,td2,td3,td4,td5)
        container.append(div)
    })
}
displayData();
//edit
function edit(name,email,phone){
    let data = JSON.parse(localStorage.getItem("users")) || []
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
    localStorage.setItem("users",JSON.stringify(data))

   displayData()
  }
//delete
function remove(id){
    let data = JSON.parse(localStorage.getItem("users")) || [];

    let newdata = data.filter((el,index)=>{
        return id !== index;
    })
    localStorage.setItem("users",JSON.stringify(newdata))
    displayData()
}

