// Object is a "keyed" collection .
// Object stores data in 'key-value pair'.
// Object is used for more complex data.

//Object can be formed 3 ways
// 1) Object literal   2) new instance Object Constructor   3)custom function


// let employee = {
//     id:10,
//     name:"John",
//     salary:50000
// }

// console.log(employee);


// 2) new instance Object Constructor

// const  employee = new Object();
// employee.id = 20;
// employee.name = "Peter",
// employee.salary = 3000;

// console.log(employee);   //{ id: 20, name: 'Peter', salary: 3000 }


 
// 3) Custom function - by using new keyword
// new keyword - it can be create new object and return it and it refer the object by using this keyword
  

// function Employee(id,name,salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//   }

//   const employee1 = new Employee(40,"Peter",40000);  //Employee { id: 40, name: 'Peter', salary: 40000 }
//   const employee2 = new Employee(10,"Alex",30000);   //Employee { id: 10, name: 'Alex', salary: 30000 }

//   console.log(employee1);
//   console.log(employee2);


