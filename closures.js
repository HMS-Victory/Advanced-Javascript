"use strict" 

function sayHello(name) {
    let text="hello "+name;
    return function() {
        console.log(text);    
    }
};

let sayAsim=sayHello("Asim");
sayAsim();

//Closures def = when a function returns a function, the function being returned will have acces to data from the original function even after being returned.


//closures point to the current value of the outer scope.

let foo=[];

for(let i=0; i<10; i++) {
    (function(y){
        foo[y]=function() {
            return y;
        };
    })(i)
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());