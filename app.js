//by value (primitives)

let a=3;
let b;

b = a;
a=2;

console.log(a);
console.log(b);

//by reference (all objects (including functions))
let c={greeting: 'hi'};
let d;

d=c;
c.greeting='hello';//mutate

console.log(c);
console.log(d);

//by referance (even as parameters)
function changeGreeting(obj) {
    obj.greeting='Hola'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

//equals operator sets up new memory space (new address)
c={greeting: 'Howdy'};
console.log(c);
console.log(d);