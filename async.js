

const doAsyncTask=()=> Promise.resolve("done");

let asyncFunction=async function() {
    let value=await doAsyncTask();
    console.log(value);
    console.log("2");
    return "3";
};

//async is only useful because of await, it does not make things any better
//than you could be using promise, the only reason you would ever use async
// is when you plan to use await
asyncFunction().then((val)=> console.log(val))
(async function() {
    //await allows you to go from non-blocking to blocking realy easily
    // it is important in case something needs to be done synchronously 
    //inside a function.
    let value=await doAsyncTask();
    console.log(value);
    console.log("done2");
})();

doAsyncTask().then(val=> console.log(val));
console.log("here");



//an example of try catch
const doAsyncTask=()=> Promise.reject("error");

const asyncFunction=async function() {
    try{
        const value=await doAsyncTask();
    }catch(e) {
        console.error("moo", e);
        return;
    }
}

//an example of await with previous stuff.
//using await can slow down your program, promisescan speed it up
//the way that promises turn it into asynchronous.

const doAsyncTask=(delay)=> {
    return new Promise(resolve=> setTimeout(()=> resolve(delay), delay))
}
//pass in a delay 1000ms
doAsyncTask(1000);

let promises=[doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)]
//call all of the promises at once.
Promise.all(promises).then((values)=> console.log(values));

(async ()=> {
    for (let task of tasks) {
        console.log(await task())
    }
})();



