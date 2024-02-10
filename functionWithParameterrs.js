// function with single parameter

// function greet(name){
//     console.log(`Hello ${name} !!`);
// }

// greet("Anshu");


// function with a default parameter

// function greet(name = 'Guest'){
//     console.log(`Hello ${name} !!`);
// }

// greet("Anshu");    //Hello Anshu !!
// greet("Pradeep");    // Hello Pradeep !!
// greet();             // Hello Guest



// function with different parameter

//passing parametrs as a object
// function greetings({city,name}){
//    console.log(`Hello ${name} from city ${city}`)
// }
// greetings({name:"John",city:"Delhi"});

// OR

// function greetings(name,city){
//     console.log(`Hello ${name} from city ${city}`)
//  }
//  greetings("John","Delhi");



//Passing any number of arguments  two ways - 1) using arguments object   2)




//using arguments object
// function sumWithArguments(){

//     const argsArray = Array.from(arguments)

//     let sum = argsArray.reduce(function(acc,curr){
//         return acc + curr
//     } , 0)

//     return sum ;
// }

// console.log(sumWithArguments(1,2,3,4,5,6))
// console.log(sumWithArguments(1,2,3))
// console.log(sumWithArguments(3,4,5,6))
// console.log(sumWithArguments(1,2,3,6))

  // by using rest operators ...

//   function sumWithArguments(...numbers){
//     let sum = numbers.reduce(function(acc,curr){
//         return acc + curr
//     },0)
//     return sum
//   }

//   console.log(sumWithArguments(2,43,8))
//   console.log(sumWithArguments(2,43))

// Functions with object
  
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(20,30,40));   [ 20, 30, 40 ]





// const user = {
//     username : "Anshu",
//     price : 25000
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)

//OR

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject({
//         username : "Anshu",
//         price : 25000
//     })

// Function with array

// const myNewArray = [200 ,400, 100, 600]

// function returnSecondValueOfArray(getArray){
//     return getArray[1];
// }

// console.log(returnSecondValueOfArray(myNewArray));


//OR

function returnSecondValueOfArray(getArray){
    return getArray[1];
}

console.log(returnSecondValueOfArray([200 ,400, 100, 600]));





