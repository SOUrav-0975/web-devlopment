const Posts =[
    {title:'post-1',body:'this is post-1',createdAT:new Date().getTime()},
    {title:'post-2',body:'this is post-2',createdAT:new Date().getTime()}
]
 let intervalId = 0;

    function getPosts(){
        setInterval(()=>{
        clearInterval(intervalId)
        let result = "";
        Posts.forEach((el,index)=>{
            result += `<h3>${el.title} created ${Math.floor((new Date().getTime()- el.createdAT)/1000)} seconds ago.</h3>`
        })
        document.getElementById("promise").innerHTML = result;
        console.log(result)
       
      
 },1000)
};


function createPost(el){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            Posts.push({...el,createdAT:new Date().getTime()})
            const err = false;
            if(!err){
                resolve()
            }else{
                reject(`Error`)
            }
        },4000)
    })
  
}

function deletePost(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(Posts.length > 0){
                resolve(Posts.pop())
            }else{
                reject("Array is Empty")
            }
           
        },1000)
    })
  
}
createPost({title:'post-3',body:'this is post-3'})
.then(() =>{
   getPosts()
     deletePost().then(()=>{
       getPosts()
         deletePost().then(()=>{
            getPosts()
              deletePost().then(()=>{
                getPosts()
                  deletePost().then(()=>{})
                  .catch((err)=>{
                    console.log(err)
                  })
   }).catch((err)=>console.log(err))
   }).catch((err)=>console.log(err))
   }).catch((err)=>console.log(err))
}).catch((err)=>console.log(err))


