// map method is used when we want transformation of whole array.
// filter is used when we want to filter the arrar to obtain required value.
// reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.


// Found the answer for why reduce is named so. 
//According to an article on digital ocean -"A reducer will only return one value and one value only hence the name reduce." In simple terms, it reduces the array to a single value.
//also it reducing from multiple value(array) to single value.









// map method is used when we want transformation of whole array.

//const arr = [5,1,3,2,6];

//Double - [10,2,6,4,12];

// function double (x){
//     return x*2;
// }

// const output01 = arr.map(double);
// console.log(`Binary :`,output01);  // [ 10, 2, 6, 4, 12 ]

//Triple - [15,3,9,6,18]

// function triple(x){
//     return x*3;
// }
// const output02 = arr.map(triple);
// console.log(`Triple :`,output02);

//Binary - [ '101', '1', '11', '10', '110' ]

// function convertDecimalToBinary(x){
//     return x.toString(2);
// } 

// const output03 = arr.map(convertDecimalToBinary);
// console.log(`Binary : `,output03);










//OR

//const arr = [5,1,3,2,6];

//Double - [10,2,6,4,12];

// const output01 = arr.map( (x) => x*2);
// console.log(`Binary :`,output01);  // [ 10, 2, 6, 4, 12 ]

//Triple - [15,3,9,6,18]

// const output02 = arr.map((x)=> x*3);
// console.log(`Triple :`,output02);

//Binary - [ '101', '1', '11', '10', '110' ]

// const output03 = arr.map((x) => x.toString(2));
// console.log(`Binary : `,output03);


//   arr.filter()

// const arr = [5,1,3,2,6];

// //Filter odd values from arr

// function isOdd(x){
//     return x%2;
// }

// const output01 = arr.filter(isOdd);
// console.log(`Odd num. : `,output01);   //[ 5, 1, 3 ]


// //Filter even values from arr

// function isEven(x){
//     return x%2===0;
// }
// const output02 = arr.filter(isEven);
// console.log(`Even num. : `,output02);  //Even num. :  [ 2, 6 ]



//OR

// const arr = [5,1,3,2,6];
// //Filter odd values from arr

// const output01 = arr.filter((x) => x%2);
// console.log(`Odd num. : `,output01);   //[ 5, 1, 3 ]

// //Filter even values from arr
// const output02 = arr.filter((x) => x%2===0);
// console.log(`Even num. : `,output02);  //Even num. :  [ 2, 6 ]







// reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.


// Found the answer for why reduce is named so. 
//According to an article on digital ocean -"A reducer will only return one value and one value only hence the name reduce." In simple terms, it reduces the array to a single value.
//also it reducing from multiple value(array) to single value.



//const arr = [5,1,3,2,6];

//sum

// const totalSum = arr.reduce(function(acc,curr){
//     acc = acc + curr;
//     return acc;
// },0)

// console.log(totalSum);  //17

//find max num 

// const maxNum = arr.reduce(function(max,curr){
//     if(curr > max){
//         max = curr;
//     }
//     return max;
// },0)

// console.log(maxNum); // 6



//Array of object

const users = [
    { firstName: "Kiyara", lastName: "Adani",age: "26"},
    { firstName: "Shah Rukh", lastName: "Khan",age: "55"},
    { firstName: "Tina", lastName: "Dabi",age: "27"},
    { firstName: "Akshay", lastName: "Saini",age: "26"},
];

//List of full name

const output01 = users.map((x) => x.firstName +" "+ x.lastName);

console.log(output01);

// { 26 : 2 , 75 : 1 , 50 : 1 } 

const output02  = users.reduce(function(acc,curr){
    if(acc[curr.age]){
    //  acc[curr.age] = ++acc[curr.age];
    acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(output02);  //{ '26': 2, '27': 1, '55': 1 }


// find first name of those pepole whose age is less than 30


const output03 = users.filter((x) => x.age < 30).map((x)=> x.firstName);

console.log(output03);  //[ 'Kiyara', 'Tina', 'Akshay' ]


// find first name of those pepole whose age is less than 30 using reduce()

const output04 = users.reduce(function(acc, curr){
    if (curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [ ])

console.log(output04);   //[ 'Kiyara', 'Tina', 'Akshay' ]









