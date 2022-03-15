class Person{
    _firstname="";
    _lastName="";

    constructor(firstname, lastName) {//call cunstructor function.
        this.firstname=firstname;
        this.lastName=lastName;
    }

    get firstName() {
        return this._firstname;
    }

    get lastName() {
        return this._lastName;
    }

    set firstName(name) {
        if(name==="") {
            console.error("firstName cannot be blank");
        }else {
            this._firstName=name;
        }
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    whoAreYou() {
        return `Hi i'm ${this.fullName()}`;
    }

}
//the new keyword will create an object based off of the blueprint in the class.
let asim=new Person("asim", "hussain");

    class Student extends Person {//extends means that we
        //are creating a new class, holding all of the values of the previous
        //one with some additional features.
        constructor(firstName, lastNames, course) {
            super(firstName, lastName);
            this.course=course;
        }
        whoAreYou() {//'super' keyword calls the other function of the same name in the other class.
            return `${super.whoAreYou()} and i'm studying ${this.course}`;
        }
    }
    let asim=new Student("asim", "hussain", "javascript");
asim.fullName();

//a class is a BLUEPRINT for how to create an object.