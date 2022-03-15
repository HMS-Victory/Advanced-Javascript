//function statement
function greet(name) {
    console.log('Hello' + name);
}

greet('John');

//using a function expression
let greetFunc=function(name) {
    console.log('Hello' +name);
};
greetFunc('John');

//using an Immediately Invoked function (IIFE)
let greeting=function(name){

    return 'Hello' + name;

}('John');
console.log(greeting);

let firstname='John';

(function(name){
    let greeting='Inside IIFE: Hello'
    console.log( 'Hello' + ' '+ name);

}(firstname)); // IIFE

