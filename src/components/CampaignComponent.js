import React, {Component} from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

export default class CampaignComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <View style={{height:150}}>
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
