let array=[1,2,3];


//for-in, allows you to loop through objects, does not work with arrays.
let obj={a:1, b:2};

for(let prop in obj){
    console.log(prop);
}
//there is a for-of loop, which is new and will work with arrays.



//less verbose but does not accept break or continue, otherwise does the same things.
//return statement is viable though, it will exit the forEach only though, because it 
//returns a function.
array.forEach(function(value){
    console.log(value);
});
//for loop accepts break or continue.
for(let i=0; i<array.length; i++){
    console.log("1st ", array[i]);
    continue;
    console.log("2nd ", array[i]);
    break;
}
//This can also do the same things, except you can use return, which will exit the function immediately.
function doSomething() {
    for(let i=0; i<array.length; i++){
        console.log("1st ", array[i]);
        return;
    }
}
doSomething();