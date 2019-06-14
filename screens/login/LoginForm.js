import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import styles from '../../constants/FormStyle';
import axios from 'axios';

const DisplayAlert = ({message, success}) => {
	const container = (success == true) ? styles.buttonSuccessContainer : styles.buttonAlertContainer;
	return (
		<View style={container}>
			<Text style={styles.buttonTxt}>{message}</Text>
		</View>
	);
}

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: '',
			ip: ''
		}
		this.submitForm = this.submitForm.bind(this);
	}

	async componentDidMount() {
		await AsyncStorage.getItem("token")
		.then((item) => {
			if (item) {
				this.props.navigation.navigate('Home');
			}
		})
	}

	async submitForm() {
		if (this.state.email == '') {
			this.setState({errors: 'Please enter an email'})
		} else if (this.state.password == '') {
			this.setState({errors: 'Please enter a password'})
		} else {
			this.setState({errors: ''})
			await axios.post('https://snapchat.improve-code.net/connection', {
				email: this.state.email,
				password: this.state.password
			})
			.then(res => {
				AsyncStorage.setItem("token", res.data.data.token);
				this.props.navigation.navigate('Home', {token: res.data.data.token});
			})
			.catch(err => {
				this.setState({errors: err.response.data.data});
			})
		}
	}

	render() {
		return (
			<View style={styles.containerForm}>
				<TextInput
					placeholder="Email"
					placeholderTextColor="rgba(0,0,0,0.7)"
					returnKeyType="next"
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.input}
					onChangeText={(mail) => this.setState({email: mail})}
				/>
				<TextInput
					placeholder="Password"
					placeholderTextColor="rgba(0,0,0,0.7)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					onChangeText={(pass) => this.setState({password: pass})}
				/>
				{this.state.errors != '' && <DisplayAlert success={false} message={this.state.errors} />}
				<TouchableOpacity style={styles.buttonContainer}
								  onPress={this.submitForm}>
					<Text style={styles.buttonTxt}>CONNEXION</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default LoginForm;
