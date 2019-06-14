import React, {Component} from 'react';
import {View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import styles from '../../constants/FormStyle';

class LoginScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.imageContainer}>
					<Image style={styles.logo}
							source={require('../../assets/snapchat-logo.jpg')}
							/>
						<Text style={styles.subtitle}>Login My Snapchat</Text>
				</View>
				<View>
					<LoginForm navigation={this.props.navigation}/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default LoginScreen;
