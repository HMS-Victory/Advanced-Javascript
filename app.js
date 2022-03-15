//Polyfill
if(!Object.create) {
    Object.create=function (o) {
        if(arguments.length>1) {
            throw new Error('Object.create implementation'+
            ' only accpets the first parameter.');
        }
        function F() {}
        F.prototype=o;
        return new F();
    };
}

let person={
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi '+this.firstname;
    }
}

let john=Object.create(person);
john.firstname='John';
john.lastname='Doe';
console.log(john);