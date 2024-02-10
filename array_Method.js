// Array Methods

//Add remove items


// at the end of the array


// let numbers = [10,20,30,40,50]
// numbers.push(60) //add no at last or end of the array
// console.log(numbers);



// let numbers = [10,20,30,40,50]
// let poppedItem = numbers.pop() //remove no at last or end of the array
// console.log(poppedItem);
// console.log(numbers);


//at the start of the array - shift and unshift
//  let numbers = [10,20,30,40,50];
//  numbers.unshift(90);//add ele at beginning of the array
//  numbers.unshift(100)
//  console.log(numbers);



// let numbers = [10,20,30,40,50];
// let removedItem =  numbers.shift(90);//remove ele at beginning of the array
//  console.log(removedItem);;
//  console.log(numbers);


// slice - syntax arr.slice(startIndex , endIndex) not including end index
 
// let numbers = ["I","love","javascript"];
// console.log(numbers.slice(1,3));
// console.log(numbers);

// create copy array
// it is Shallow copy

// let nums = [10,20,30,40]
// let copyNums = nums.slice();
// console.log(copyNums);


//splice - it change the original array
//splice can be use as swiss knife
//add,delete,replace
//syntax arr.splice(startIndex,deleteCount,arg1,arg2,arg3,....,argN);


// let arr = ["I","study","Programming"];
// console.log(arr.splice(1,1));
// console.log(arr);


// let arr = ["I","study","Programming","right","now"];
// arr.splice(0,3,"Listen","Music");
// console.log(arr);


// let arr = ["I","study","Programming","right","now"];
// let removedElements = arr.splice(0,3,"Listen","Music");
// console.log(removedElements);
// console.log(arr);

// when we want to insert the element using splice array of method

// let arr = ["I","study","Programming"];
// arr.splice(2,0,"complex","skill")
// console.log(arr);


// In splice method , we can use negative index

// let arr = [1,2,10]
// arr.splice(-1,0,3,4);
// console.log(arr);













//concat
// let arr = [10,20]
// console.log(arr.concat([30,40]));
// console.log(arr.concat([30,40],[50,60]));
// console.log(arr.concat([30,40],50,60));

//iterate method

// [10,20,30].forEach(function(item,index,array){
//     console.log(`${item} is at index ${index} in ${array}`);
// })

//searching in array - 1) indexOf method and 2) includes 3)find 4)findIndex 5)findLastIndex

// includes method - it return boolean - if value is present in the array then it return true else false

// let arr = [1,0,false];
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));
// console.log(arr.indexOf(1100));

// console.log(arr.includes(0));



// find 
// let users =[
//     { id:1, name:"Raj"},
//     { id:2, name:"Peter"},
//     { id:3, name:"Sahil"},
//     { id:4, name:"Ram"}
// ]

// let user = users.find(function(item,index,array){
//     // console.log(item,index,array);
//     return item.id =1;
// })
// console.log(user);



//findIndex 
// let users =[
//     { id:1, name:"Raj"},
//     { id:2, name:"Peter"},
//     { id:3, name:"Sahil"},
//     { id:4, name:"Ram"}
// ]

// let user = users.findIndex(function(item,index,array){
//     // console.log(item,index,array);
//     return item.name =="Sahil";  //2
// })
// console.log(user);

//reverse method - its reverse the original array
// let nums =[10,20,30,40,50,60]
// console.log(nums.reverse());
// console.log(nums);

//split and join method

// let names ='John , Peter,Sahil'
// let arr = names.split(',');
// for(let name of arr){
//     console.log(`Send Message to ${name}`);
// }