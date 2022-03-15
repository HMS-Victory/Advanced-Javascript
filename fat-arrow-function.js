let cb=()=> {//fat arrow function
    console.log("setTimeout called!");
}
setTimeout(cb, 1000);

//another example
let add=(a,b)=> a+b; 
add(1,2);
//adds a and b, but it does not require the return keyword 
//or brackets, if you want to write a fast piece of code 
//on one line.


let obj={
    name: 'asim',
    sayLater: () =>{
        console.log(this);
        setTimeout(()=> {
            console.log(`${this.name}`);
        }, 1000);
    }
};
obj.sayLater();
//the fat arrow syntax stabalizes the value of this.
//So when you use a fat arrow syntax, the 'this' keyword is
//not dependant on the calling context. in the previous
// function the this keyword refers to where the function
// actually is where it is written.