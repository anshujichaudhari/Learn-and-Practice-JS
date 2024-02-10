//HOF --   https://youtu.be/HkWxvB1RJq0?si=DNcU5RceE2tlQ7b_       <-- YOUTUBE CHANNEL (Refrence)
//HOF --   https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/#:~:text=A%20higher%20order%20function%20is%20a%20function%20that%20takes%20one,functions%20like%20map%20and%20reduce.

//HOF - A function that returns a function or takes other functions as arguments is called a higher-order function.
//HOF - A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce.

const radius = [3,1,2,4];

function area(radius){
    return Math.PI * radius * radius;
}

function circumference(radius){
  return 2*Math.PI*radius;
}

function diameter(radius){
return 2*radius;
}

function calculate(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius , area));
console.log(calculate(radius , circumference));
console.log(calculate(radius,diameter));