import * as firebase from 'firebase';





export default class Dal{


    root;
    constructor(){
        // config = {
        //     apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
        //     authDomain: "younameit-1c368.firebaseapp.com",
        //     databaseURL: "https://younameit-1c368.firebaseio.com",
        //     storageBucket: "younameit-1c368.appspot.com",
        //     messagingSenderId: "359491308358"
        // };
        // const firebaseApp = firebase.initializeApp(config);
        // this.root =   firebaseApp.database().ref("/");
    }

    static addSuggestion(suggestion)
    {
        config = {
            apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
            authDomain: "younameit-1c368.firebaseapp.com",
            databaseURL: "https://younameit-1c368.firebaseio.com",
            storageBucket: "younameit-1c368.appspot.com",
            messagingSenderId: "359491308358"
        };
        const firebaseApp = firebase.initializeApp(config);
        this.root =   firebaseApp.database().ref("/");
        var usersRef = this.root.child("suggestion");
        usersRef.set(suggestion);

    }

    static getSuggestion()
    {




    }


}

