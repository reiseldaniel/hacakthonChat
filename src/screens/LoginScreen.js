import React, {Component, PropTypes} from 'react';
import { observer } from 'mobx-react/native';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import RootStore from '../stores/rootStore';
import FBLoginView from '../components/FBloginView';

@observer
class LoginScreen extends Component {



  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>

        <Text style={styles.text}>
          <Text style={{fontWeight: '500'}}>Counter: </Text>
        </Text>

        <TouchableOpacity onPress={ this.onIncrementPress.bind(this) }>
          <Text style={styles.button}>Increment Counter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onLoginPress.bind(this) }>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onShowModalPress.bind(this) }>
          <Text style={styles.button}>Show another login as modal</Text>
        </TouchableOpacity>
          <FBLogin
              buttonView={<FBLoginView />}
              ref={(fbLogin) => { this.fbLogin = fbLogin }}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}
              permissions={["email","user_friends"]}
              onLogin={function(e){console.log(e)}}
              onLoginFound={function(e){console.log(e)}}
              onLoginNotFound={function(e){console.log(e)}}
              onLogout={function(e){console.log(e)}}
              onCancel={function(e){console.log(e)}}
              onPermissionsMissing={function(e){console.log(e)}}
          />



      </View>
    );
  }

  onIncrementPress() {

  }

  onLoginPress() {
    RootStore.login();
  }

  onShowModalPress() {
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  }
});

export default LoginScreen;
