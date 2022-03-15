let animal={
    kind: 'human'
};

console.log(animal);

// let asim={};

// asim.__proto__=animal;

let asim=Object.create(animal, {food: {value: 'mango'}});
console.log(asim.kind);

console.log(animal.isPrototypeOf(asim));

asim.kind='igloo';
console.log(asim.kind);
console.log(animal.kind);
console.log();