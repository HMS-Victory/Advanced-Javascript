greet();

function greet(){
    console.log('hi');//function STATEMENT
}

let anonymousGreet=function(){//expression, that results in a VALUE.
    console.log('hi');//expressions cannot be hoisted, this function is a var.
}

anonymousGreet();

function log(a){
    a();
}

log(function() {
    console.log('hi');
});