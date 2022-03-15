function h1(strings, ...values) {
    let body="";
    for(let i=0; i<strings.length; i++) {
        body += strings[i] +(values[i] || "");
    }
    return "<h1>"+body+"</h1>";
}

let name1="asim";
let place="world";
console.log(h1`hello ${place} my name is ${name1}`);