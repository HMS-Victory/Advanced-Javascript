
const doAsyncTask=(delay)=> {
    return new Promise(resolve=> setTimeout(()=> resolve(delay), delay))
}
//pass in a delay 1000ms
doAsyncTask(1000);

let promises=[doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)]
//call all of the promises at once.
Promise.all(promises).then((values)=> console.log(values));
