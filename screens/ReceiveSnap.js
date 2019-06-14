import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';
import styles from '../constants/FormStyle';
import axios from 'axios';

class ReceiveSnap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snapList: [],
            token: ''
        }
    }

    async componentDidMount() {
        const newToken = await AsyncStorage.getItem("token");
        this.setState({token: newToken});
        console.log(newToken);
        const res = await axios.get('https://snapchat.improve-code.net/snaps', {
            headers: {
                token: this.state.token
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

export default ReceiveSnap;
