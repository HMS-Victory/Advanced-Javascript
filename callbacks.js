function doAsyncTask(cb) {

    setTimeout(()=> {
        cb(null, "the correct data");
    }, 0);
}
doAsyncTask((err, data)=> {
    if(err) {
        throw err
    }else{
        console.log("data ", data)
    }
});
let message="Callback Called";




//an example of callback torture, when you have to keep
// nesting functions you want done synchronously, and as
// a result it is hard to understand

function doAsyncTask(cb) {
    setTimeout(()=> {
        console.log("async Task Calling Callback");
        cb();
    }, 0)
}

doAsyncTask(()=> {
    doAsyncTask(()=> {
        doAsyncTask(()=> {
            doAsyncTask(()=> {
                doAsyncTask(()=> {
                    doAsyncTask(()=> {
                        doAsyncTask(()=> {
                            doAsyncTask(()=> {})
                        })
                    })
                })
            })
        })
    });
});