"use strict";

function Person(first_name, last_name) {
    this.first_name=first_name;
    this.last_name=last_name;//a function inside a function
    this.full_name=function() {//is a private function.
        return first_name+' '+last_name;
    };
};



Person.prototype.full_name_prototype=function() {
    return this.first_name+' '+this.last_name;
};

let dude=new Person("asim", "hussain");
console.log(dude.full_name_prototype());

dude.first_name="Moo";
console.log(dude.full_name());






//new example








"use strict"


function Person(first_name, last_name) {
    this.first_name=first_name;
    this.last_name=last_name;
};

Person.prototype.full_name=function() {
    return this.first_name+' '+this.last_name;
};

function Professional(honorific, first_name, last_name) {
    Person.call(this, first_name, last_name);
    this.honorific=honorific;
}

Professional.prototype=Object.create(Person.prototype);

Professional.prototype.professional_name=function() {
    return this.honorific+' '+this.first_name+' '+this.last_name;
}

let prof=new Proffessional("Dr.", "Asim", "Hussain");

console.log(prof.professional_name());
console.log(prof.full_name());
