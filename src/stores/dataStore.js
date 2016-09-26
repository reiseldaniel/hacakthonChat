/**
 * Created by daniel on 9/25/16.
 */

import { observable } from 'mobx';
import * as firebase from 'firebase';
config = {
    apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
    authDomain: "younameit-1c368.firebaseapp.com",
    databaseURL: "https://younameit-1c368.firebaseio.com",
    storageBucket: "younameit-1c368.appspot.com",
    messagingSenderId: "359491308358"
};


class DataStore {
    @observable campaigns = [];
    @observable likes = [];
    @observable suggestions = [];
    @observable test = false;

    constructor(){

        this.firebaseApp = firebase.initializeApp(config);
        this.db = this.firebaseApp.database().ref("/Campaings");
        setTimeout(() => {alert('hi'); this.test = true},5000);
        this.db.on('value', (snap) => {
            const campaigns = [];
            snap.forEach((item) => {
                campaigns.push(item.val());
            });
            alert(JSON.stringify(campaigns));
            this.campaigns = campaigns;
        })
    }
}

export default new DataStore();