//immediately invoked function
(function(global, $){
    //takes in some values
    let Greetr=function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    let supportedLangs=['en', 'es'];

    greetings={
        en: 'Hello',
        es: 'Hola'
    };

    formalGreetings={
        en: 'Greetings',
        es: 'Saludos'
    };

    let logMessages={
        en: 'Logged in',
        es: 'Incio session'
    }

    Greetr.prototype={
        fullName: function() {
            return this.firstName+ ' '+this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language)=== -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language]+ ' '+this.firstName+ '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language]+' '+this.fullName();
        },

        greet: function(formal) {
            let msg;

            //if undefined it will be coerced to 'false'
            if(formal) {
                msg=this.formalGreeting();
             }else{
                 msg=this.greeting();
             }
             if(console) {
                 console.log(msg);
             }
             //'this' refers to the calling object at execution time
             //makes the method chainable
             return this;
        },
        log: function(){
            if(console) {
                console.log(logMessages[this.language]+': '+this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
            this.language=lang;

            this.validate();

            return this;
        }

    };

    Greetr.init=function(firstName, lastName, language){

        //set the self variable self equal to the this keyword.
        let self=this;
        //set some default values
        self.firstName=firstName || '';
        self.lastName=lastName || '';
        self.language=language || 'en'

    }

    Greetr.init.prototype=Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));