import React, {Component, PropTypes} from 'react';
import {firebaseApp}   from './MainScreen';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ListView,
  Dimensions
} from 'react-native';
import Immutable from 'immutable';
import * as _ from 'lodash'
import {connect} from 'react-redux';
import CampaignComponent from '../components/CampaignComponent';
import SuggestionComponent from '../components/SuggestionComponent';
import Dal from '../Dal/Dal'
//import dal from "./index";

config = {
  apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
  authDomain: "younameit-1c368.firebaseapp.com",
  databaseURL: "https://younameit-1c368.firebaseio.com",
  storageBucket: "younameit-1c368.appspot.com",
  messagingSenderId: "359491308358"
};



const {width,height} = Dimensions.get('window');
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => !Immutable.is(r1, r2)
});

class Campaign extends Component {

  static navigatorStyle = {
    statusBarColor: '#7CB342',
    toolBarColor: '#8BC34A',
    navigationBarColor: '#8BC34A',
    drawUnderNavBar: false
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this._renderRow = this._renderRow.bind(this);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !Immutable.is(r1, r2)
    });
    const a = Immutable.fromJS(props.campaign.comments);
    this.db = firebaseApp.database().ref("/Campaings");
    this.state = {
      dataSource: ds.cloneWithRows(props.campaign.comments),
      data:a,
      campaign: props.campaign,
      campaigns: props.campaigns,
      campaignID:props.campaignId
    }
  }

  onNavigatorEvent(event) {
    if (event.id == 'tabSelected') {
      this.onTabSelected();
      return;
    }

    console.log('ListScreen', 'Unhandled event ' + event.id);
  }

  componentWillMount() {
    console.log('ListScreen', 'componentWillMount');
  }

  componentWillUnmount() {
    console.log('ListScreen', 'componentWillUnmount');
  }

  onTabSelected() {
    console.log('ListScreen', 'onTabSelected');
    this.props.navigator.setButtons({
      rightButtons: [
        {
          id: 'account',
          icon: require('../../img/ic_account_box_.png')
        }
      ]
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <CampaignComponent campaign={this.props.campaign}/>
            <ScrollView>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
                  style={styles.list}/>
            </ScrollView>
          <SuggestionComponent onSubmit={this.addSuggestion.bind(this)} campaign={this.props.campaign} />
      </View>
    );
  }
  /*
  * {
   "text": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
   "score": 82,
   "hasLiked": true,
   "name": "Willie",
   "image": "http://dummyimage.com/192x182.png/dddddd/000000",
   "time": 94,
   "timeUnit": "day"
   }
  * */
  _renderRow(rowData, sectionID, rowID) {
     rowData = Immutable.fromJS(rowData);
    return (

      <View style={styles.test}>
        <Image source={{uri:rowData.get('image')}} style={styles.thumb}/>
        <View style={styles.listData}>
          <Text style={styles.suggestions_name}>
            {rowData.get('name')}
          </Text>
          <Text style={styles.text}>
            {rowData.get('text')}
          </Text>
          <View style={styles.metaRow}>
            <Text style={styles.time}>
              about {rowData.get('.time')} {rowData.get('timeUnit')}{rowData.get('.time') > 1? "s":""} ago.
            </Text>
            <TouchableOpacity onPress={() => this._like(rowID)} style={styles.likebox}>
              {this._likeImage(rowData.get('hasLiked'))}
              <Text style={styles.likes}>
                {rowData.get('score')} respects!
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
  _likeImage(liked){
    return liked? <Image source={require('../../images/likeOn.png')} style={styles.likeImage}/> :
                  <Image source={require('../../images/likeOff.png')} style={styles.likeImage}/>
  }
  _like(id) {
    // alert(id == 0);
    const list = this.state.data
        .update(id, (data) => data.updateIn(["score"],0,(score) => this.state.data.get(id).get('hasLiked')? score-1 : score+1)
        .updateIn(["hasLiked"],false,(hasLiked) => !hasLiked));
    let campaigns = this.state.campaigns;
    let camp = this.state.campaign;
    camp.comments = list.map((data) => data.toMap());
    campaigns[this.state.campaignID] = camp;
    // this.db.set(campaigns);
    this.setState(
        {
          campaigns:campaigns,
          campaign: camp,
          dataSource: ds.cloneWithRows(list.toArray()),
          data: list
        }
    )
  }

  addSuggestion(suggestion){




      let user = Dal.currentUser();
      let suggestionObj = {
          id: 333,
          created: Date.now(),
          campaignID: this.props.campaign,
          userid: user.id,
          text: suggestion,
          userImage: user.img,
          userName: user.name
      }

      Dal.addSuggestion(suggestionObj)
      const list = this.state.data.unshift(Immutable.Map(suggestionObj));

      this.setState(
          {
              dataSource: ds.cloneWithRows(list.toArray()),
              data: list
          }
      );


    this.state.data.push(suggestion);
  }

}

export default connect()(Campaign);

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  likeImage:{
    width:20,
    height:20
  },
  likebox:{
    alignItems: 'center',
    flexDirection: 'column'
  },
  metaRow:{
    flexDirection: 'row'
  },
  time:{
    fontSize: 10,
    flex: 0.7
  },
  likes:{
    color:'green',
    paddingRight: 5
  },
  test:{
    flexDirection: 'row',
    backgroundColor:'white',
    marginTop:20
  },
  listData: {
    flexDirection: 'column',
    flex:1
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F6F6F6'
  },
  thumb: {
    width: 60,
    height: 60,
    borderRadius:20,
    marginRight:20
  },
  text: {
    color:'black'
  },
  suggestions_name: {
      fontSize: 12,
      fontWeight: 'bold',
  },
  list: {
    height:height-175,
    flexDirection: 'column',
    flex:1,
  }
});


