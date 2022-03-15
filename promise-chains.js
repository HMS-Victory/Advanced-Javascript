Promise.resolve("done")
    .then(val=> {
        console.log(val);
        return new Promise(resolve=> {
            setTimeout(()=> resolve("done2"), 1000);
        });
    })
    .then(val=> console.log(val));



//dealing with errors
Promise.reject("fail") 
    .then(val=> console.log(val))
    .then(val=> console.log(val), err=> console.error(err));



//another example for errors

new Promise((resolve, reject) => {
    throw "fail";
})
.then(val=> {
    console.log(val);
})
.then(val=> console.log(val), err=> console.error(err));

//the finally handler

Promsie.resolve("done")
.the(val=> {
    throw "fail";
})
.then(val=>console.log(val))
.catch(err=> console.error(err))
//the finally operator is alwyas called no matter what.
.finally(_ => console.log("cleaning up"))
