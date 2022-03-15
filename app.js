function Person(firstname, lastname) {//function name is capitolized to make debugging easier in case I forget to include the 'new' operator.
    console.log(this);
    this.firstname=firstname;
    this.lastname=lastname;
    console.log('this function is invoked');

}
//The advantage of this, is being able to provide a new
//method to the person function, which is accessed by
//all of the other objects on the prototype chain, which
//means changing one line of code to impact thousands of
//objects, potentially.
Person.prototype.getFullName=function() {
    return this.firstname+ ' '+this.lastname;
}
//Putting new methods on the prototype (above) you save 
//memory space by not having every 
//object connected to it copy it to a different location.
let john= new Person('John', 'Doe');
console.log(john);

let jane=new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName=function() {
    return this.lastname+ ', '+this.firstname;
}

console.log(john.getFormalFullName());