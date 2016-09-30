/**
 * Created by daniel on 9/27/16.
 */
import { observable,computed } from 'mobx';


class RootStore {
    @observable user = {};
    @observable root = "";

    constructor(){


    }

    appInitialized() {
        this.root = 'login';
    }

    login() {
        this.root = 'campaigns';
    }
}

export default new RootStore();