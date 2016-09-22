import React, {Component, PropTypes} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ListView,
} from 'react-native';

import * as _ from 'lodash'
import {connect} from 'react-redux';

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
    
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({})),


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
      <View style={styles.row}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
        style={styles.list}/>
      </View>

    );
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <View>


        <Image source={{uri:rowData.img}} style={styles.thumb}/>
        <View>
          <Text style={styles.suggestions_name}>
            {rowData.name}
          </Text>
          <Text style={styles.text}>
            {rowData.text}
          </Text>
        </View>
      </View>
    );
  }

  _genRows() {
    const dataBlob = [{text: "cooment 1", score: 300},
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
    return _.sortBy(dataBlob,'score');

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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6'
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  text: {
    flex: 1
  },
  suggestions_name: {
      fontSize: 12,
      fontWeight: 'bold',
  },
  list: {
    flexDirection: 'column',
    flex:1,
  }
});


