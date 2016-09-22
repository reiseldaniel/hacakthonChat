import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Navigation} from "react-native-navigation";
import thunk from "redux-thunk";
import * as reducers from "./reducers";
import * as appActions from "./reducers/app/actions";
import {registerScreens} from "./screens";
import {Platform} from "react-native";

// redux related book keeping
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

// screen related book keeping
registerScreens(store, Provider);

// notice that this is just a simple class, it's not a React component
export default class App {
  constructor() {
    // since react-redux only works on components, we need to subscribe this class manually
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized());
  }

  onStoreUpdate() {
    const {root} = store.getState().app;
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
          Navigation.startSingleScreenApp({
            screen: {
              screen: 'Main',
              title: 'Main',
              navigatorStyle: {}
            },
            passProps: {
              str: 'This is a prop passed in \'startSingleScreenApp()\'!',
              obj: {
                str: 'This is a prop passed in an object!',
                arr: [
                  {
                    str: 'This is a prop in an object in an array in an object!'
                  }
                ],
                arr2: [
                  [
                    'array of strings',
                    'with two strings'
                  ],
                  [
                    1, 2, 3
                  ]
                ]
              },
              num: 1234,
              fn: function() {
                return 'Hello from a function!';
              }
            }
          });

  }
}
