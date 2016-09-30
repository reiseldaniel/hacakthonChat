import {Navigation} from "react-native-navigation";
import {registerScreens} from "./screens";
import { reaction } from 'mobx';
import rootStore from './stores/rootStore';

// screen related book keeping
registerScreens();

// notice that this is just a simple class, it's not a React component
export default class App {
    constructor() {
        reaction(() => rootStore.root, () => this.startApp(rootStore.root));
        rootStore.appInitialized();

    }


    startApp(root) {
        switch(root){
            case  'login':
                Navigation.startSingleScreenApp({
                    screen: {
                    screen: 'Login',
                    title: ''}});
                return;
            case  'campaigns':
                Navigation.startSingleScreenApp({
                    screen: {
                    screen: 'Main',
                    title: ''}});
                return;
        }


    }
}
