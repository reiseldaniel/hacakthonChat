import React, {Component} from 'react';
 import dismissKeyboard from 'react-native-dismiss-keyboard';

import {
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
const {width,height} = Dimensions.get('window');
export default class SuggestionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           suggestion:'',
            campaign:this.props.campaign,
           onSubmit:this.props.onSubmit
        }
    }
    onChange(e) {
        this.setState({ suggestion: e.nativeEvent.text});
    }


    postSuggestion()
    {
        this.state.onSubmit(this.state.suggestion);
        this.state.suggestion  = '';
        dismissKeyboard();
    }
    render() {

        return (

            <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="add suggestion"
                    onChange={this.onChange.bind(this)}
                    value={this.state.suggestion}

                />
                <TouchableOpacity onPress={() => this.postSuggestion()}>
                   <Text style={styles.text}>Post</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        height:40
    },
    thumb: {
        width: 64,
        height: 64
    },
    text: {
        marginTop:15,
        color: 'black',
        marginLeft:10
    },
    searchBar: {
        paddingLeft: 30,
        fontSize: 15,
        height: 40,
        width:width-50,
        borderWidth: 2,
        borderColor: '#E4E4E4',
    }
});