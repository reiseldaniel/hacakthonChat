import React, {Component, PropTypes} from 'react';
import { observer } from 'mobx-react/native';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import RootStore from '../stores/rootStore';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from '../components/FbloginView'

@observer
class LoginScreen extends Component {



  constructor(props) {
    super(props);
      this.state = {per:"assa"};
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>

        <Text style={styles.text}>
          {this.state.per}
        </Text>

        <TouchableOpacity onPress={ this.onIncrementPress.bind(this) }>
          <Text style={styles.button}>Increment Counter {this.state.per} ! </Text>
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
              onLogin={function(e){alert(e)}}
              onLoginFound={function(e){alert(e)}}
              onLoginNotFound={function(e){alert(e)}}
              onLogout={function(e){alert(e)}}
              onCancel={function(e){alert(e)}}
              onPermissionsMissing={function(e){alert(e)}}
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
