// Object is a "keyed" collection .
// Object stores data in 'key-value pair'.
// Object is used for more complex data.


//Object Methods

// var emp = {
//     name:"Anshu",
//     age:30,
//     salary : 50000
// }
// console.log(emp.name);
// console.log(emp.age);
// console.log(emp.salary);


var emp = {
    name:"Anshu",
    age:30,
    salary : 50000
}

//If we need keys we use Object.keys(name_of_object) and Object.getOwnPropertyNames(name_of_object), it convert key of object into array it is called method chaining.

// let keys = Object.keys(emp);
// console.log(keys);   //[ 'name', 'age', 'salary' ]

//let keys = Object.keys(emp).forEach((key) => console.log(key));   


//name
//age
//salary

//If we need only values of key then we use Object.values(name_of_object) 


// var emp = {
//     name:"Anshu",
//     age:30,
//     salary : 50000
// }
//console.log(Object.values(emp));  //[ 'Anshu', 30, 50000 ]


//If we need both key & values pair then we use Object.entries(emp)

// var emp = {
//     name:"Anshu",
//     age:30,
//     salary : 50000
// }
// const keyValuesPair = Object.entries(emp);
// console.log(keyValuesPair);  //[ [ 'name', 'Anshu' ], [ 'age', 30 ], [ 'salary', 50000 ] ]

// If we need to convert key values pair to Object then  we use Object.fromEntries( Object.entries(name_of_user))


// var emp = {
//     name:"Anshu",
//     age:30,
//     salary : 50000
// }
// const keyValuesPair = Object.entries(emp);
// console.log(keyValuesPair);

// after manipulation on array

// let convertToObject = Object.fromEntries(keyValuesPair)
// console.log(convertToObject);    //{ name: 'Anshu', age: 30, salary: 50000 }


// more method

// Object.freeze()
// Object.isFrozen()

// Object.seal()
// Object.isSealed()

// Object.create(null)  //prototype chain

//Object.defineProperty(name_of_obj , 'key' , {})
//Object.defineProperties()


// var emp = {
//     name:"Anshu",
//     age:30,
//     salary : 50000
// }
// console.log(Object.hasOwn(emp,'name') );     //true              //it return boolean value
// console.log(Object.hasOwn(emp,'music') );   //false



// var emp = {
//     name:"Anshu",
//     age:30,
//     salary : 50000
// }
// console.log(Object.getOwnPropertyNames(emp));  //[ 'name', 'age', 'salary' ]
// console.log(Object.getOwnPropertyDescriptor(emp,'name'));  //it is singular property of key object
// console.log(Object.getOwnPropertyDescriptors(emp));  ///it is piural property of keys object

//Object.defineProperty(name_of_obj , 'key' , {})
// var emp = {}

// Object.defineProperty(emp,'name',{
//     value:'John',
//     writable:false
// })

// console.log(emp.name);   //John



// Object.defineProperties(object , {     key:{} })

// var data = {}
// Object.defineProperties(data, {
//     username:{
//         value:"Peter",
//         writable:true
//     },
//     email:{
//         value:"peter@gmail.com",
//         writable: true
//     }
// })

// console.log(data.username);
// console.log(data.email);



// enumerable - agar kisi key ki enumerable value true hai to use key ke values ko viewwd or seen kiya ja skta hai if it is iterated using the for...in loop or Object.keys() method.
//definition of enumerable --  An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method. All the properties which are created by simple assignment or property initializer are enumerable by default. 


var data = {}
Object.defineProperties(data, {
    username:{
        value:"Peter",
        writable:true,
        enumerable:true
    },
    email:{
        value:"peter@gmail.com",
        writable: true,
        enumerable:true
    },
    phone:{
        value:"6597412389",
        enumerable:false
    }
})

for (const key in data){
    console.log(`${key} : ${data[key]}`);
}

