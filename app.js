function makeGreeting(language) {
    return function(firstname, lastname) {

        if(language==='en') {
            console.log('Hello'+firstname+' '+lastname);
        }
        if(language==='es') {
            console.log('Hola'+firstname+' '+ lastname);
        }

    }
}

//call the function
let greetEnglish = makeGreeting('en');//create new function by passing in certain parameters, which will change how the returned function acts.
let greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');//use the variable which is equal to the function, which is equivelent to calling the function with a few extra parameters.
greetSpanish('John', 'Doe');

// You set a function with a certain parameter equal to a variable, so when you use the variable in the future
//You are really calling the function with a certain parameter, and a s a result a different execution context
//than others created later, with different parameters.

