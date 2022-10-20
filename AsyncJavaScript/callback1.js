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
        document.getElementById("call").innerHTML = result;
        console.log(result)
       
      
 },10000)
};


function createPost(el,callback){
    setTimeout(() => {
        Posts.push({...el,createdAT:new Date().getTime()})
        callback();
    },2000)
}
createPost({title:'post-3',body:'this is post-3'},getPosts)

function create4thPost(el,callback){
    setTimeout(() => {
        Posts.push({...el,createdAT:new Date().getTime()})
        callback();
    },5000)
}

create4thPost({title:'post-4',body:'this is post-4'},getPosts);

var timer;
var count ;
/*
function lastModidified(){
    count = 0;
    clearInterval(timer)
    timer = setInterval(()=>{
        count++;
        document.getElementById("call").innerHTML = count;
        console.log(count)
    },2000)
}
lastModidified()*/