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

let person1 = new details(name,email,phone);
axios.post('https://crudcrud.com/api/4f17942c032a4d32be009d2203e0c66f/save_post',person1)
.then((res)=>{
    console.log(res)
})
.catch((err) => {
   console.log(err)
})

}
window.addEventListener("DOMContentLoaded",() =>{
    axios.get("https://crudcrud.com/api/c497ddf047114241865320f9f6f22811/add_post")
    .then((res) => {
        console.log(res);
        for(var i=0; i< res.data.length;i++){
            displayData(res.data[i]) 
        }
    })
    .catch((err) => {
        console.log(err)
    })
  })

  let items = Object.keys(res.data[i])
function displayData(items){
 
    let container = document.querySelector("tbody")
    container.innerHTML=null;
    items.forEach(function(el,index){
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