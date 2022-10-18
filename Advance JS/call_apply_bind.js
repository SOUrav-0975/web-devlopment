//call() method
//the call() method calls a function with a given this value & arguments provided individually.

const employee = {
    firstName:"John",
    lastName:"Doe",
    getFullName:function(profile){
        console.log(`my name is ${this.firstName} ${this.lastName} and i am a ${profile}`)
    }
}

const customer = {
    firstName:"sam",
    lastName:"smith"
}

//now we want print fullname of customer with the help of getFullName method Which is inside the employee method .
//we use call method for this.//function borrowing
employee.getFullName.call(customer,"software devloper")     //my name is sam smith and i am a software devloper.

//apply() method 
//apply() method is same as call() method but only in this case arguments is provided as an array.
//from above example,we will get same output from apply mehod also

employee.getFullName.apply(customer,["software devloper"])     //my name is sam smith and i am a software devloper.



//bind() method
//bind() method creates a new function,when invoked has this sets to a provided value.
//unlike the call() and apply() methods the bind() method doesn't immediately execute the function.it just returns a new version of
//..the function whose this sets to thisArgs argument.
//in above we can apply mathod as

const details = employee.getFullName.bind(customer);
details("software devloper")                // //my name is sam smith and i am a software devloper.


