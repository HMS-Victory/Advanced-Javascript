//destructuring is taking values from objects and arrays and assigning them to distinct variables.











//in a function example

function f({x=0}) {
    console.log(x);
}
f({x:4});



//another example
const arr=['a', 'b'];
const [x,y]=arr;

console.log(x);
console.log(y);



//one example
const obj={first: 'Asim', last:'Hussain', age: 42};

const {first: f, last: l}=obj;

console.log(f);
console.log(l);