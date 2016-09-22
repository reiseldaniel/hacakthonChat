
import React, { Component } from 'react';
import {View, ListView, Text, TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import _ from 'lodash';
import Gallery from 'react-native-gallery';
import Search from 'react-native-search-bar';

export default class MainScreen extends Component{

    constructor(props) {
        super(props);
        this.state={
            search: ''
        }
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            catDataSource: ds.cloneWithRows(this._genCatRows({})),
            campDataSource: ds.cloneWithRows(this._genCampRows({})),
            searchBar:''

        }



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

    _genCampRows() {
        const dataBlob = [{text: "cooment 1", score: 300},
            {text: "campaign 2", score: 300},
            {text: "campaign 3", score: 300},
            {text: "campaign 4", score: 300},
            {text: "campaign 5", score: 300}];
        return dataBlob;
    }

      _genCatRows() {
            const dataBlob = [{text: "cooment 1", score: 300},
                {text: "category 2", score: 300},
                {text: "category", score: 300}]
            return dataBlob;

        }

        render() {
        return (
            <View style={{flex: 1}}>

                {/*<Search*/}
                    {/*ref='state.searchBar'*/}
                    {/*placeholder='Search'*/}

                {/*/>*/}

                    <Gallery
                        style={{flex: 1, backgroundColor: 'black'}}
                        images={[
                            '/Users/harel/IdeaProjects/hacakthonChat2/images/rebound.png',
                            '/Users/harel/IdeaProjects/hacakthonChat2/images/rebound.png',
                            '/Users/harel/IdeaProjects/hacakthonChat2/images/rebound.png'

                        ]}
                    />



                <View id="categoryList"  style={{flexDirection: 'row' ,margin: 10}}>
                    <ListView
                        dataSource={this.state.catDataSource}
                        renderRow={this._renderRow}/>
                </View>

                <View id="campaignList" style={{flexDirection: 'row', margin: 10}}>
                    <ListView
                        dataSource={this.state.campDataSource}
                        renderRow={this._renderRow}/>
                </View>

            </View>
        )
    }
}

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