//promises are ASNYCHRONOUS.

//call a new promise which starts an asynchronous function
//stuff done in this function is done asynchronously
//when finished code continues down the scope chain
//in a synchronous manor.
function doAsyncTask(){
    const promise=new Promise((resolve, reject)=> {
        console.log("Async work complete");
        if(true) {
            resolve({x:1});
        }else{
            reject("Error");
        }
    });
    return promise;
}
//the 'then' keyword defines what to do when resolve or reject is called
//the first parameter is always resolve, and the second reject.
doAsyncTask().then(
    (val)=> console.group(val),
    (err)=> console.group(err)
);
//you can also imediately instantiate a promise response.
let promise=Promise.resolve("done");
//let promise=Promise.reject("fail");

function doAsyncTask() {
    return Promise.resolve();
}//promises are asynchronous by default
//callbacks are not asyncrounous by default.

promise.then(_=> console.log(message));
let message="Promise Resolved";
