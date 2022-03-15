function a(){
    console.log(this);
    this.newvariable='hello';
}

let b=function() {
    console.log(this);
}

a();

console.log(newvariable);
b();

let c={
    name: 'the c object',
    log: function() {
        let self=this;//this works because objects are changed by referance, therfore I will be able to mutate the original this, by changing var self.
        self.name='Updatd c object';
        console.log(self);

        let setname=function(newname) {
            self.name=newname;
        }
        setname('Updated again! the c object');
        console.log(self);
    }
}

c.log();