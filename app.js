function buildFunctions(){
    let arr=[];
    for(let i=0; i<3;i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

let fs=buildFunctions();

fs[0]();
fs[1]();
fs[2]();




































function buildFunctions2(){

    let arr2=[];

    for(let i2=0; i2<3;i2++){
        arr2.push(function(j){
            return function() {
                console.log(j);
            }
        }(i))  
    }
    return arr2;
}

let fs2=buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();