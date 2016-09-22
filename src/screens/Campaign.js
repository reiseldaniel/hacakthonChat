import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ListView,
} from 'react-native';
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
      comments : [{text: "cooment 1", score: 300},
      {text: "cooment 2", score: 300},
      {text: "cooment 3", score: 300},
      {text: "cooment 4", score: 300},
      {text: "cooment 5", score: 300}],

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

        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}/>
      </View>

    );
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>
          {rowData.text}
        </Text>
        <Text style={styles.text}>
          likes: {rowData.score}
        </Text>
      </View>
    );
  }

  _genRows() {
    const dataBlob = [{text: "cooment 1", score: 300},
      {text: "cooment 2", score: 300},
      {text: "cooment 3", score: 300},
      {text: "cooment 4", score: 300},
      {text: "cooment 5", score: 300}];
    return dataBlob;
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
    width: 64,
    height: 64
  },
  text: {
    flex: 1
  }
});


