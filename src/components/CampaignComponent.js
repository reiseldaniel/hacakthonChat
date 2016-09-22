import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
    StyleSheet
} from 'react-native';

export default class CampaignComponent extends Component {
  constructor(props) {
    super(props);
      this.state = {

          campaign:{}
      };

         this.state.campaign = this.props.campaign? this.state.campaign : {text:""};

  }
  render() {
    return (
    <View style={StyleSheet.navigationBar}>
        <Text>{this.props.campaign.text}</Text>
        <Image source={{uri:images.searchImage}}
    />
     </View>
    );
  }
}

const images = {

  searchImage:"http://www.endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png"

}
var navigationBarStyles = StyleSheet.create({
    navigationBar: {
        backgroundColor: '#FFFFFF',
        height: 70,
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        justifyContent: 'space-between'
    },
});
