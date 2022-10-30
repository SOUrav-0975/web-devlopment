
//promise

console.log('person1:shows ticket')
console.log('person2:shows ticket')
const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
});
const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log(`husband:we should go in`)
    console.log(`wife:no i am hungry`)
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
});
const getButter = getPopcorn.then((t)=>{
    console.log('husband:we should go in')
    console.log('wife: i need butter on my popcorn')
    return new Promise((resolve,reject) => resolve(`${t} butter`))
})
console.log('person4:shows ticket')
console.log('person5:shows ticket')

//async await

console.log('person1:shows ticket');
console.log('person2:shows ticket');
const preMovie = async () =>{
    const promiseWifeBringingTicks = new Promise ((resolve,reject)=>{
        setTimeout(()=> resolve('ticket',3000))
    });

    const getPopcorn = new Promise ((resolve,reject)=>resolve('popcorn'));
    const addButter = new Promise ((resolve,reject)=>resolve('butter'));
    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`)
    console.log('husband:we should go in')
    console.log('wife: no i am hungry');
    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter
    console.log(`wife: i need ${butter} on my popcorn`);
    console.log('husband:we should go in')
   
    let colddrink = await getColdDrink
    console.log(`wife: i need ${colddrink} along with popcorn`);
    console.log('husband:we should go in')

    return ticket;
}


preMovie().then((m)=>{
    console.log(m)
})
console.log('person4:shows ticket')
console.log('person5:shows ticket')

//create Post - delete post
const Posts =[
    {title:'post-1',body:'this is post-1',createdAT:new Date().getTime()},
    {title:'post-2',body:'this is post-2',createdAT:new Date().getTime()}
]

let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        Posts.push({...el,createdAT:new Date().getTime()})
        const err = false;
        if(!err){
            resolve("promise resolve")
        }else{
            reject(`Error`)
        }
    },4000)
})

async function createPost(el){
   try{
    let result = await promise;
    console.log(result)
   }
   catch(err){
    console.log(err)
   }
    }
    let deletePromise = new Promise(function(resolve,reject){
        setTimeout(() => {
            if(Posts.length > 0){
                resolve(Posts.pop())
            }else{
                reject("Array is Empty")
            }
           
        },1000)
    })

    function deletePost(){
        try{
            let result = await deletePromise;
            console.log(result)
           }
           catch(err){
            console.log(err)
           }
      
    }



