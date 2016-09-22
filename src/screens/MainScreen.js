
import React, { Component } from 'react';
import {View, ListView, Text, TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import _ from 'lodash';
import Gallery from 'react-native-gallery';





export default class MainScreen extends Component{


    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this)
        ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            catDataSource: ds.cloneWithRows(this._genCatRows({})),
            campDataSource: ds.cloneWithRows(this._genCampRows({})),
            searchText: ''

        }
    }

    moveToCampaign(campaign) {
        this.props.navigator.push({
            title: "Pushed from SideMenu",
            screen: "Campaign",
            passProps:{campaign}
        });

    }

    _renderRow(rowData, sectionID, rowID) {

        return (
            <View style={styles.row} >
                <TouchableOpacity onPress={() => this.moveToCampaign(rowData)}>
                <Text style={styles.text} >
                    {rowData.text}
                </Text>
                <Text style={styles.text}>
                    likes: {rowData.score}
                </Text>
                    </TouchableOpacity>
            </View>
        );
    }

    _genCampRows() {
        const dataBlob = [{text: "cooment 1", score: 300},
            {text: "campaign 2", score: 300},
            {text: "campaign 3", score: 300},
            {text: "campaign 4", score: 300},
            {text: "campaign 5", score: 300},
            {text: "campaign 2", score: 300},
            {text: "campaign 3", score: 300},
            {text: "campaign 4", score: 300},
            {text: "campaign 5", score: 300},
            {text: "campaign 2", score: 300},
            {text: "campaign 3", score: 300},
            {text: "campaign 4", score: 300},
            {text: "campaign 5", score: 300},
            {text: "campaign 5", score: 300},
            {text: "campaign 5", score: 300}

        ];
        return dataBlob;
    }

      _genCatRows() {
            const dataBlob = [{text: "cooment 1", score: 300},
                {text: "category 2", score: 300},
                {text: "category", score: 300}]
            return dataBlob;

        }
    setSearchText(event){

        let searchText = event.nativeEvent.text;
        this.setState({searchText});
        let campaigns =  this._genCampRows();

        let filteredData = this.filterNotes(searchText, campaigns);
        this.setState({
            campDataSource: this.state.campDataSource.cloneWithRows(filteredData)

        });
    }

    filterNotes(searchText, notes) {
        let text = searchText.toLowerCase();
        return notes.filter((n) => {
            let note = n.text.toLowerCase();
            return note.search(text) !== -1;
        });
    }





render() {
        return (
            <View style={{flex: 1}}>


                <View style={{height:50}}>
                <TextInput
                    style={styles.searchBar}
                    value={this.state.searchText}
                    onChange={this.setSearchText.bind(this)}
                    placeholder="Search campaigns" />
                 </View>
                 {!this.state.searchText ?
                     <View style={{height:150}}>
                    <Gallery
                        style={{flex: 1, backgroundColor: 'black'}}
                        images={[
                            'http://p10.qhimg.com/t019e9cf51692f735be.jpg',
                            'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
                            'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
                        ]}
                    />
                         </View>
                    : null}



                {/*<View id="categoryList"  style={{flexDirection: 'row' ,margin: 10}}>*/}
                    {/*<ListView*/}
                        {/*dataSource={this.state.catDataSource}*/}
                        {/*renderRow={this._renderRow}/>*/}
                {/*</View>*/}

                <View id="campaignList" style={{flexDirection: 'row', margin: 10}}>
                    <ListView
                        dataSource={this.state.campDataSource}
                        renderRow={this._renderRow}/>
                </View>


            </View>
        )
    }


}

const images = {

    searchImage:"http://www.endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png"

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
    },
    searchBar: {
        paddingLeft: 30,
        fontSize: 22,
        height: 10,
        flex: .1,
        borderWidth: 9,
        borderColor: '#E4E4E4',
        }
});