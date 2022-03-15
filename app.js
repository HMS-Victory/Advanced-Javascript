function sayHiLater() {
    let greeting='Hi';

    setTimeout(function() {

        console.log(greeting);

    }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {//Callback function
    let a=1000;//some work
    let b=2000;

    callback();//the 'callback', it runs the functin I give it!
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    console.log('All done...');
});

//function callbacks are whena function is passed in as a parameter.
