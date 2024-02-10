// Important Ques.  -> Difference bet. Shallow copy and Deep Copy 
// Difference bet. Pass by value and Pass by reference



//In JavaScript, when a function is called, the arguments can be passed in two ways, either Pass by value or Pass by reference (address). Primitive data types such as string, number, null, undefined, and boolean, are passed by value while non-primitive data types such as objects, arrays, and functions are passed by reference in Javascript.


//Pass by value
// let num1 = 70
// let num2 = num1

// console.log(num1) // 70
// console.log(num2) // 70

// num1 = 40

// console.log(num1) // 40
// console.log(num2) // 70/



//Pass by reference

// const user = {
//     name:"John",
//     age:30
// }

// const newUser = user;

// newUser.name = "Peter";
// user.age = 50;
// console.log(user);      //{ name: 'Peter', age: 50 }
// console.log(newUser);  //{ name: 'Peter', age: 50 }f

