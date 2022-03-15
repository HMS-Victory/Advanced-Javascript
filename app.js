function mapForEach(arr, fn) {
    let newArr=[]
    for(let i=0; i<arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}
//when using functunal programming, make sure that you donot mutate data.
let arr1=[1,2,3];
console.log(arr1);

let arr2=mapForEach(arr1, function(item) {
    return item*2;
});
console.log(arr2);

let arr3=mapForEach(arr1, function(item) {
    return item>2;
});
console.log(arr3);

let checkPastLimit=function(limiter, item) {
    return item>limiter;
}
let arr4=apForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

let checkPastMimitSimplified=function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

let arr5=mapforEach(arr1, checkPastLimitSimplified(1));

//Find out more about functional programming
//https://underscorejs.org/docs/underscore-esm.html


//underscore

let arr6=_.map(arr, function(item) {return item*3});
console.log(arr6);

let arr7=_.filter([2,3,4,5,6,7], function(item) {return item%2===0;
});
console.log(arr7);