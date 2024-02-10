// let a=10;
// let b=20;
// console.log(a+b);    30


// let a;
// let b;

function add(a,b){
    //block of code
    console.log(a+b);
}

add(50,60);  //  110  //function calling or function invoking

//function ko return bhi kra skte ho

function x(callback){

    console.log('Hello');
    callback();
}

function y(){
    console.log('Anshu');
}

x(y);