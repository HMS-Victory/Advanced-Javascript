//the 'this', keyword has to do with the context in which 
// it is called, if it is called nested inside two functions, 
// then it will be the parent function 
// that will be equal to this, it is all in the context.



// console.log(this);

// this.asim=1;

// console.log(this.asim);
// console.log(window.asim);
// console.log(asim);

function checkThis(){
    let self=this;//stabalizes the 'this' keyword.
    console.log(this);

    function checkOther(){
        self.moo=1;
        console.log(self);
    }
    checkOther();
}
checkThis();

let asim={
    checkThis: function() {
        console.log(this);
    }
};
asim.checkThis();
console.log(asim);

let func=asim.checkThis;
func();
