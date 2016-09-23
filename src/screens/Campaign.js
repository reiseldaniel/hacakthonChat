import React, {Component, PropTypes} from 'react';
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

const {width,height} = Dimensions.get('window');
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => !Immutable.is(r1, r2)
});
class Campaign extends Component {

  static navigatorStyle = {
    statusBarColor: '#7CB342',
    toolBarColor: '#8BC34A',
    navigationBarColor: '#8BC34A',
    drawUnderNavBar: true
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this._renderRow = this._renderRow.bind(this);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !Immutable.is(r1, r2)
    });
    const a = Immutable.fromJS(props.campaign.comments);

    this.state = {
      dataSource: ds.cloneWithRows(props.campaign.comments),
      data:a
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
          <SuggestionComponent onSubmit={this.addSuggestion.bind(this)}/>
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
    // alert(list.toArray());
    this.setState(
        {
          dataSource: ds.cloneWithRows(list.toArray()),
          data: list
        }
    )
  }

  _genRows() {
    dataBlob = [
      {text: "comment 1",
        score: 350,
        name:"Daniel",
        time:40,
        timeUnit: "seconds",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 2",
        score: 250,
        name:"Moshe",
        time:40,
        timeUnit: "minutes",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 3",
        score: 199,
        name:"Dana",
        time:1,
        timeUnit: "minute",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 4",
        score: 300,
        name:"Moshe",
        time:12,
        timeUnit: "seconds",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 5",
        score: 999,
        name:"Harel",
        time:12,
        timeUnit: "days",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 1",
        score: 350,
        name:"Daniel",
        time:40,
        timeUnit: "seconds",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 2",
        score: 250,
        name:"Moshe",
        time:40,
        timeUnit: "minutes",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 3",
        score: 199,
        name:"Dana",
        time:1,
        timeUnit: "minute",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 4",
        score: 300,
        name:"Moshe",
        time:12,
        timeUnit: "seconds",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 5",
        score: 999,
        name:"Harel",
        time:12,
        timeUnit: "days",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 1",
        score: 350,
        name:"Daniel",
        time:40,
        timeUnit: "seconds",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 2",
        score: 250,
        name:"Moshe",
        time:40,
        timeUnit: "minutes",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 3",
        score: 199,
        name:"Dana",
        time:1,
        timeUnit: "minute",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 4",
        score: 300,
        name:"Moshe",
        time:12,
        timeUnit: "seconds",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"},
      {text: "comment 5",
        score: 999,
        name:"Harel",
         time:12,
        timeUnit: "days",
        img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"}];
    const ordered = _.orderBy(dataBlob,['score'],['desc']);
    return Immutable.fromJS(ordered);
  }


  addSuggestion(suggestion){



      let suggestionObj = {text: suggestion,
          score: 0,
          name:"Daniel",
          time:0,
          timeUnit: "seconds",
          img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"}
      const list = this.state.data.unshift(Immutable.Map(suggestionObj));

      this.setState(
          {
              dataSource: ds.cloneWithRows(list.toArray()),
              data: list
          }
      );


    this.state.data.push(suggestion);
  }

  _renderSeparator(sectionID, rowID) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 1,
          backgroundColor: rowID % 2 == 0 ? '#3B5998' : '#CCCCCC'
        }}
      />
    );
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


