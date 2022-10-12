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
    data.map(function(el){
        let div = document.createElement("tr")
        let td1 = document.createElement("td");
        td1.innerText = el.name;
        let td2= document.createElement("td");
        td2.innerText=el.email;
        let td3= document.createElement("td");
        td3.innerText=el.phone;
        div.append(td1,td2,td3)
        container.append(div)
    })
}

