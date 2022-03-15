let person={
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        let fullname=this.firstname+' '+this.lastname;
        return fullname;
    }
}

let logName=function(lang1, lang2){
    console.log('Logged: '+this.getFullName());
    console.log('Arguments: '+lang1+' '+lang2);
    console.log('------------------');
}

let logPersonName=logName.bind(person);//bind creates a copy of the function and decides what the this keyword will be.

logPersonName('en');

logName.call(person, 'en', 'es');// the call keyword is the same as parenthesies after a function, except it allows you to tell where the 'this' keyword should point to.
logName.apply(person, ['en', 'es'])//the apply method wants an array of parameters, not a simple list, otherwise it is the same as 'call'.

(function(lang1, lang2) {
    console.log('Logged: '+this.getFullName());
    console.log('Arguments: '+lang1+' '+lang2);
    console.log('------------------');
}).apply(person, ['en', 'es']);


//function borrowing
let person2={
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));//Change the value of the this keyword in order to collect the values of firstname and lastname of the person2 object.


//function currying
function multiply(a,b){
    return a*b;
}

let multiplyByTwo=multiply.bind(this,2);
console.log(multiplyByTwo(4));

let multiplyByTwo=multiply.bind(this,3);
console.log(multiplyByTwo(4));