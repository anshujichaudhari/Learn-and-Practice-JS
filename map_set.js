// set is a unordered collection
// set stores unique values


// const setExample = new Set();
// setExample.add(10);
// setExample.add(20);
// setExample.add(10)
// setExample.add(20)
// setExample.add(30)
// setExample.add(40)
// console.log(setExample);  //Set(2) { 10, 20 }
// console.log(setExample.size);  //2

//setExample.clear();
//console.log(setExample);  //Set(0) {}
// console.log(setExample);    //Set(4) { 10, 20, 30, 40 }
// setExample.delete(30);
// console.log(setExample);   //Set(3) { 10, 20, 40 }









// const data = new Set();
// data.add("John");
// data.add({
//     likes:'javascript',
// })
// console.log(data.entries());  //[Set Entries] {  [ 'John', 'John' ],  [ { likes: 'javascript' }, { likes: 'javascript' } ]}



// const data = new Set();
// data.add(10);
// data.add(20);
// data.add(30);
// data.add(40);

// function multiply(value1 , value2){
//     console.log(`data[${value1} : data{${value2 *2}}]`);
// }
//data.forEach(multiply);    //data[10 : data{20}]
                             //data[20 : data{40}]
                             //data[30 : data{60}]
                             //data[40 : data{80}]


                             


// console.log(data.has(20));  //true
// console.log(data.has(60));  //false


//console.log(data.keys());   //[Set Iterator] { 10, 20, 30, 40 }
//console.log(data.values());  //[Set Iterator] { 10, 20, 30, 40 }









// let arr = [10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50];

// const set = new Set(arr);

// console.log(set);   //Set(5) { 10, 20, 30, 40, 50 }



// need of Set

// Application of Set in JavaScript:

// Deleting duplicates element from an array
// Creating a unique array from the unique values of two arrays
// Union of two sets
// Interaction of two sets























//Map

//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

//A Map's keys can be any value (including functions, objects, or any primitive).

//Read-only Map-like objects have the property size, and the methods: entries(), forEach(), get(), has(), keys(), values(), and @@iterator.

//Writeable Map-like objects additionally have the methods: clear(), delete(), and set().

let map  = new Map();

map.set('1','stringvalue');
map.set(1,'numberValue');
map.set(true,'booleanValue');

// console.log(map);  //Map(2) { '1' => 'stringvalue', 1 => 'numberValue' }
// console.log(map.get('1'));    //stringvalue
// console.log(map.get(1));      //numberValue
// console.log(map.get(true));   //booleanValue



