import React, {Component} from 'react';
import {
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class SuggestionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           suggestion:'',
           onSubmit:this.props.onSubmit
        }
    }
    onChange(e) {
        this.setState({ suggestion: e.nativeEvent.text});
    }
    postSuggestion()
    {
        this.state.onSubmit(this.state.suggestion);
    }
    render() {

        return (

            <View style={{height:150}}>
                <Text>Add Comment:</Text>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search campaigns"
                    onChange={this.onChange.bind(this)}

                />
                <TouchableOpacity onPress={() => this.postSuggestion()}>
                   <Text>Post</Text>
                </TouchableOpacity>
            </View>
        );
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