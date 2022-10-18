//bind() method


let Student={
    name:"john",
    age:20
}
const getAge = function(){
    console.log(`Age is ${this.age}`)
}

const age = getAge.bind(Student)
age()

