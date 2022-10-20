var selectedRow = null;
//constructor function for storing data as an object
function expenses(a,d,c){
    this.amount=a;
    this.desc=d;
    this.cate=c;
}
let form=document.getElementById("form");
form.addEventListener("submit",addExpenses)
function addExpenses(e){
    e.preventDefault();
    

    let amount = form.amount.value;
    let desc = form.desc.value;
    let cate = form.cate.value;
    if(amount === ""||desc === ""||cate ===""){
        alert("Please Fill All The Inputs")
    }else{

    //use of localStorage to store the user data
    let data1 = new expenses(amount,desc,cate);
    console.log(data1)
    
    let data = JSON.parse(localStorage.getItem("expense")) || [];
    data.push(data1)
    
    localStorage.setItem("expense",JSON.stringify(data));
    form.amount.value=null;
    form.desc.value=null;
    form.cate.value=null;
    displayData()
    
    }
    
    }
    
    
    function displayData(){
       let data = JSON.parse(localStorage.getItem("expense")) || [];
       let container = document.querySelector("tbody")
       container.innerHTML=null;
        data.map((el,index)=>{
            let div = document.createElement("tr")
            let td1 = document.createElement("td");
            td1.innerText = el.amount;
            td1.style.fontSize ="1.3rem";
            let td2= document.createElement("td");
            td2.innerText=el.desc;
            td2.style.fontSize ="1.3rem";
            let td3= document.createElement("td");
            td3.innerText=el.cate;
            td3.style.fontSize ="1.3rem";
            let td4 = document.createElement("td");
            td4.innerText="edit";
            td4.style.color="#fff";
            td4.style.fontSize="1.3rem";
            td4.style.zIndex="80";
            td4.style.fontFamily="Arial, Helvetica, sans-serif";
            td4.style.backgroundColor="coral";
            td4.style.cursor="pointer";
            td4.onclick=() =>{
               edit(el.amount,el.desc,el.cate)
              
            }
            let td5 = document.createElement("td");
            td5.innerText="delete";
            td5.style.backgroundColor="red";
            td5.style.fontSize="1.3rem";
            td4.style.zIndex="80";
            td5.style.fontFamily="Arial, Helvetica, sans-serif";
            td5.style.color="#fff";
            td5.style.cursor="pointer";
    
           td5.onclick=()=>{
            alert("item deleted permenently")
            remove(index)
           }
    
    
            div.append(td1,td2,td3,td4,td5)
            container.append(div)
        })
    }
    displayData();
    //edit
   function edit(amount,desc,cate){
         document.getElementById("amount").value = amount;
        document.getElementById("desc").value =desc;
        document.getElementById("cate").value = cate;
     }
    function remove(id){
        let data = JSON.parse(localStorage.getItem("expense")) || [];
    
        let newdata = data.filter((el,index)=>{
            return id !== index;
        })
        localStorage.setItem("expense",JSON.stringify(newdata))
        displayData()
   }
    
