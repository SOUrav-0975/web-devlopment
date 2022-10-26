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
axios.post('https://crudcrud.com/api/c497ddf047114241865320f9f6f22811/add_post',person1)
.then((res)=>{
    console.log(res)
})
.catch((err) => {
   console.log(err)
})

}