const PENDING=0;
const FULFILLED=1;
const REJECTED=2;

function CustomPromise(executer) {
    let state=PENDING;
    let value=null;
    let handlers=[];
    let catches=[];

    function resolve(result) {
        if(state !== PENDING) return;

        state=FULFILLED;
        value=result;

        handlers.forEach((h)=> h(value));
    }
    function reject(err) {
        if(state!== PENDING) return;

        state=REJECTED;
        value=err;
        catches.forEach((c)=> c(err));
    }

    this.then=function (callback) {
        if(state===FULFILLED) {
            callback(value);
        }else{
            handlers.push(callback);
        }

        //returns a Promise!
    }
    executer(resolve, reject);
}

const doWork=(res, rej)=> {
    setTimeout(()=> {res('Hello World')}, 1000)
}

let someText=new CustomPromise(doWork);

someText.then((val)=> {
    console.log('1st log: '+val);
});

someText.then((val)=> {
    console.log('2nd log: '+val);
});

setTimeout(()=> {
    someText.then((val)=> {
        console.log('3rd log: '+val);
    });
}, 3000);




//example of the actual promise object
const doWork=(resolve, reject)=> {
    setTimeout(()=> {resolve("Hello World") }, 1000);
};

const doOtherWork=(resolve, reject)=> {
    setTimeout(()=> {resolve("How are you?") }, 3000);
};


let someText=new Promise(doWork);

someText
.then((val)=> {
    console.log("1st log: "+val);
    return new Promise(doOtherWork);
})
.then((val)=> {
    console.log(val);
});



//Another more realistice example
fetch('video.json')
.then(reponse=> Response.json())
.then(data=>console.log(data));

//Another example
const doWork=(resolve, reject)=> {
    setTimeout(()=> {resolve("Hello World") }, 1000);
};

const doOtherWork=(resolve, reject)=> {
    setTimeout(()=> {resolve("How are you?") }, 3000);
};

async function doAllTheWork() {
    const someText=new Promise(doWork);
    const text1=await someText;     
    //Await a future value
    // that will be reached later in the code,
    // before continuing through the execution context.
    console.log(text1);
    const otherText=new Promise(doOtherWork);
    const text2=await otherText;
    console.log(text2);
}

doAllTheWork();
console.log("Done!");