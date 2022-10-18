//function curring
//currying is a process in functional programming in which we tranform a function with mltiple arguments into a sequence of nestin functions that takes one argument at a time.

//curring with the help of bind() method.
let multiply = function(x,y){
    console.log(x*y)
}
let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(7)    //14

let multiplyByThree = multiply.bind(this,3)   
multiplyByThree(10)    //30

let product = multiply.bind(this,5,4)  
product()    //20


//curring with the help of closures

let multiple = function(x){
    return function(y){
        console.log(x*y)
    }
}

let MultiplByTwo = multiple(2)  //6
MultiplByTwo(3)

let MultiplByThree = multiple(3)   //9
MultiplByThree(3)