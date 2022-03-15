function greet(whattosay){
    
    return function(name) {
        console.log(whattosay + ' ' + name);
    }

}

let sayHi=greet('Hi');
sayHi('Tony');