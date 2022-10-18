/*Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
Create 5 students with different names and age.
Write a function which keep track of the number of students created. Have you heard of static variables. Leverage that now. */
/*Take the student class which you made up and write a function called egligible for placements which basically takes the minimum board marks required by a candidate to sit for the company coming for placement and it returns a fat arrow function.The fat arrow function takes age as an argument and returns true if the given student has board marks greater than minimum board marks required by company and is above the required age set by the company.
Run the code across all the students and print the names of egligible students.*/


class Student {
    static count(){
      Student.counter = (Student.counter || 0) + 1;
      return
    }
    constructor(name,age,phone_no,board_marks){
      Student.count()
      this.name = name;
      this.age = age;
      this.phone_no = phone_no;
      this.board_marks = board_marks;
    }
    isEligible(){
      if(this.board_marks > 40){
        console.log("eligible")
      }else{
        console.log("Not eligible")
      }
    }
    setPlacementAge(minPlacementAge){
     return (min_marks) => {
       if(this.board_marks > min_marks && this.age > minPlacementAge){
         console.log(this.name +" "+"is ready for placements")
       }else{
           console.log(this.name +" "+"is not ready for placements")
       }
     }
    }
  }
  
  let s1 = new Student ("john",20,9876540123,90)
  console.log(Student.counter)
  s1.isEligible()
  s1.setPlacementAge(18)(40)
  let s2 = new Student ("jonny",22,9872240123,33)
  console.log(Student.counter)
  s2.isEligible()
  s2.setPlacementAge(18)(16)
  
  let s3 = new Student ("sam",19,8976540123,30)
  console.log(Student.counter)
  s3.isEligible()
  s3.setPlacementAge(18)(17)
  
  let s4 = new Student ("peter",17,8476540123,80)
  console.log(Student.counter)
  s4.isEligible()
  s4.setPlacementAge(18)(22)
  
  let s5 = new Student ("david",16,9976540123,70)
  console.log(Student.counter)
  s5.isEligible()
  s5.setPlacementAge(18)(18)
  
  
  