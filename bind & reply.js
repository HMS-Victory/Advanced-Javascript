//You can do basically anythin to a function that you can do to an object.
//including some of the same methods like '.toString'.

function asim(param1, param2) {
    console.log(this);
};
//functions are  this means you can assign new properties to them
asim.moo=1;//assign a property 'moo' to the function asim
console.log(asim.name);//check the name property of the function asim.

console.log(asim.toString());
//with the '.call()' function you can set the value you want this to be equal to.
asim.call({});//assign 'this' to be an empty object in the asim context

asim.checkThis();//find out the value of this.


function a(b,c ,d) {
    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);
}

a.call(1, 2, 3, 4);//passes the value of 'this' in the a function, and the all of the parameters

a.apply(1, [2,3,4]);//passes in parameters in an array.


function sum() {
    let total=0;
    for(let i=0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}

let things=[1,2,3,4,5,6,7,8,9];

//apply keyword gives you the ability of passing in an array as a parameter.
let x=sum.apply(null, things);
console.log(x);


//bind keyword assigns a default 'this' value.
//bind keyword only works with function expressions, which are anonymous functions.
let a=function(){
    console.log(this);
}.bind(1);//assign the value of 'this' to 1.
a();

//another example of bind
let asim={
    checkThis: function() {
        let checkOther=function() {
            console.log(this);
        }.bind(this);//the 'this' keyword will be equal to the asim object.
        checkOther();
    }
}