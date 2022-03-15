//just the prototype chain.

let Person={
    full_name: function() {
        return this.first_name+' '+this.last_name;
    }
}

let Professional=Object.create(Person, {
    init: {
        value: function(honorific, first_name, last_name){
            this.honorific=honorific;
            this.first_name=first_name;
            this.last_name=last_name;
        }
    },
    professional_name: {
        value: function() {
            return this.honorific+' '+this.first_name+' '+this.last_name;
        }
    }
});

let asim=Object.create(Professional);
asim.init("mr", "asim", "husain")
console.log(asim.professional_name());



// function PersonFactory(first_name, last_name){
//     let person=Object.create(Person);
//     person.first_name=first_name;
//     person.first_name=last_name;
//     return person;
// }


// let asim=PersonFactory("asim", "husain");

// console.log(asim.full_name());