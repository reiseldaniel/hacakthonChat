import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
const {width,height} = Dimensions.get('window');

export default class CampaignComponent extends Component {
  constructor(props) {
    super(props);
      this.state = {

          campaign:{}
      };

         this.state.campaign = this.props.campaign? this.state.campaign : this.state.campaign;

      this.state = {campaign:props.campaign}
  }

  /*
  * "id": "2e9d2228-f19a-4540-b693-669115dd5db6",
   "time": 15,
   "timeUnit": "day",
   "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
   "title": "Donec vitae nisi.",
   "reword": 5050,
   "companyImage": "http://dummyimage.com/158x109.png/dddddd/000000",
   "companyName": "Skaboo",
   "company": "Meevee",
  * */
  render() {
    return (
        <View>
            <View style={styles.test}>
                <Image source={{uri:this.state.campaign.image}} style={styles.thumb}/>
                <View style={styles.listData}>
                    <Text style={styles.suggestions_name}>
                        {this.state.campaign.title}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.campaign.description}
                    </Text>
                </View>
            </View>
            <View>
                <View style={styles.companyRow}>
                    <Image style={styles.companyImage} source={{uri:this.state.campaign.companyImage}}/>
                    <View style={styles.companyName}>
                        <Text >
                            by {this.state.campaign.companyName}
                        </Text>

                    </View>
                    <TouchableOpacity onPress={() => {}} style={styles.reword}>
                        <Text style={styles.likes}>
                            {this.state.campaign.reword}$
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.metaRow}>
                    <Text style={styles.time}>
                        {this.state.campaign.time} {this.state.campaign.timeUnit}{this.state.campaign.time > 1? 's':""} left!
                    </Text>
                    <TouchableOpacity onPress={() => {}} style={styles.likebox}>
                        <Text style={styles.likes}>
                            {this.state.campaign.comments.length} comments!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
  }
}

var styles = StyleSheet.create({
    container:{
        height: 125,

    },
    image:{
        width: 60,
        height:60
    },
    likeImage:{
        width:20,
        height:20
    },reword:{
        alignItems:'flex-end'
    },
    likebox:{
        alignItems: 'center',
        flexDirection: 'column'
    },
    companyRow:{
        flexDirection: 'row',
    },
    metaRow:{
        flexDirection: 'row',
    },
    time:{
        fontSize: 15,
        marginLeft:5,
        marginTop:3,
        flex: 0.7
    },
    likes:{
        color:'green',
        paddingRight: 5
    },
    test:{
        flexDirection: 'row',
        backgroundColor:'white',
        height:130
    },
    listData: {
        marginLeft:10,
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
        height: 60
    },
    text: {
        color:'black',
        flex:1
    },
    suggestions_name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    companyImage:{
        width:25,
        height:25,
        marginLeft:5,
        borderRadius:13
    },
    companyName:{

        marginLeft:5,
        flex:0.7,
    }

});
