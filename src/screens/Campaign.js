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
import Dal from '../Dal/Dal'


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
    const a = this._genRows({}).toArray();

    this.state = {
      dataSource: ds.cloneWithRows(a),
      data:this._genRows({})
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
        <View>
          <CampaignComponent campaign={this.props.campaign}/>
          <SuggestionComponent onSubmit={this.addSuggestion.bind(this)}/>
            <ScrollView>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
                  style={styles.list}/>
            </ScrollView>
      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <View key={Math.random()} style={styles.test}>
        <Image source={{uri:rowData.get('img')}} style={styles.thumb}/>
        <View style={styles.listData}>
          <Text style={styles.suggestions_name}>
            {rowData.get('name')}
          </Text>
          <Text style={styles.text}>
            {rowData.get('text')}
          </Text>
          <View style={styles.metaRow}>
            <Text style={styles.time}>
              about {rowData.get('.time')} {rowData.get('timeUnit')} ago.
            </Text>
            <TouchableOpacity onPress={() => this._like(rowID)} style={styles.likebox}>

              <Text style={styles.likes}>
                {rowData.get('score')} respects!.
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }

  _like(id) {
    // alert(id == 0);
    const list = this.state.data.update(id, (data) => data.updateIn(["score"],0,(score) => score+1));
    // alert(list.toArray());
    this.setState(
        {
          dataSource: ds.cloneWithRows(list.toArray()),
          data: list
        }
    )
  }
  _renderFooter(){
    return (
      <Text>asd asdas dsa d</Text>
    );
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


    Dal.addSuggestion(suggestion)


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

      )


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
  likebox:{
    flexDirection: 'column'
  },
  metaRow:{
    flexDirection: 'row'
  },
  time:{
    flex: 0.7
  },
  likes:{
    color:'green',
    flex:0.3
  },
  test:{
    flexDirection: 'row'
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
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10

  },
  text: {

  },
  suggestions_name: {
      fontSize: 12,
      fontWeight: 'bold',
  },
  list: {
    height:height * 0.7,
    flexDirection: 'column',
    flex:1,
  }
});


