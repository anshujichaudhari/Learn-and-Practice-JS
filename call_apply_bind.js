
//they are used to control the context of this keyword

//call method is used for function borrowing and it change the reference of this keyword and The call() method takes arguments separately.
 
// const  user1 = {
//     name :"John",
//     greeting:function(){
//         console.log(`Hello, ${this.name}`);
//     }
// }

// const user2 = {
//     name:"Peter"
// }

// user1.greeting.call(user2);



// const  user1 = {
//     name :"John"    
// }

// function greeting(){
//     console.log(`Hello, ${this.name}`);
// }

// const user2 = {
//     name:"Peter"
// }

// greeting.call(user1)
// greeting.call(user2)




// const  user1 = {
//     name :"John" ,
//     city : "Delhi" ,
//     age: 30  
// }

// function greeting(){
//     console.log(`Hello, ${this.name} from ${this.city} of age ${this.age}`);
// }

// const user2 = {
//     name:"Peter",
//     city :"Mumbai",
//     age : 40
// }

// greeting.call(user1)
// greeting.call(user2)


// const  user1 = {
//     name :"John" ,
     
// }

// function greeting(city,age){
//     console.log(`Hello, ${this.name} from ${city} of age ${age}`);
// }

// const user2 = {
//     name:"Peter",
    
// }

// greeting.call(user1,'Delhi',30)
// greeting.call(user2,'Mumbai',40)


//apply() method - With the apply() method, you can write a method that can be used on different objects.
// The apply() method takes arguments as an array.

//The apply() method is very handy if you want to use an array instead of an argument list.

// const  user1 = {
//     name :"John" ,
     
// }

// function greeting(city,age){
//     console.log(`Hello, ${this.name} from ${city} of age ${age}`);
// }

// const user2 = {
//     name:"Peter",
    
// }

// greeting.apply(user1,['Delhi',30])
// greeting.apply(user2,['Mumbai',40])

//bind() method - it creates a new function with fixed this keyword 
//OR
// Bind creates a new function that will force the this inside the function to be the parameter passed to bind().

//The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.


const person = {
    name:"John",
    sayHi: function(city , age){
        console.log(`Hello , ${this.name} from ${city} of age ${age}`);
    }
}

const anotherPerson = {
    name : "Peter"
}

const boundFunction = person.sayHi.bind(anotherPerson,'Delhi',40);

boundFunction();