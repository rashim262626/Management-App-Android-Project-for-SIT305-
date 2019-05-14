import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import Logo from '../components/Logo';
import CustomButton from '../components/CustomButton';
import Input from '../components/Input';

/*
Sign in screen Class
*/
class SignInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '', email: '', password: '', error: '', loading: false
    };
  }

  static navigationOptions = {
    header: null
  };

  //Login button method
  onLoginButtonPress() {

    const { email, password } = this.state;
    //alert(password);
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        this.onLoginFail.bind(this);
    });
  }

  //If login fail method
  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
    
  }

  //If login is success method
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      username: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('Home');
  }

  //This method will either render login button or activity spinner
  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <CustomButton
          text="Sign In"
          onPress={() => this.onLoginButtonPress()}
      />
    );
  }

  //Method to navigate to home
  handleNav() {
    this.props.navigation.navigate('Home');
  }

  //Render method to render things on screen. Default method
  render() {
    return (
      <View style={styles.MainContainerStyle} >
        
        <Logo />

      <View style={styles.componentViewStyle} >

        {/* <Input
          placeholder="User name"
          onChange={(text) => this.setState({username: text})}
          value={this.state.username}
          autoCapitalize = 'none'
          autoCorrect={false}
        /> */}
        <Input
          placeholder="Email"
          onChange={(text) => this.setState({email: text})}
          value={this.state.email}
          autoCapitalize = 'none'
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          onChange={(text) => this.setState({password: text})}
          value={this.state.password}
          autoCapitalize = 'none'
          autoCorrect={false}
          secureTextEntry
        />
      </View>

      {this.renderButton()}

      <View style={styles.SignupButtonStyle}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.SignupTextStyle}>
            Create an account ?
          </Text>
        </TouchableOpacity>
      </View>

      </View>
    );
  }
}

//Styling properties
const styles = StyleSheet.create({
  MainContainerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  componentViewStyle: {
    height: 170,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  SignupButtonStyle: {
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '10%'
  }, 
  SignupTextStyle: {
    fontSize: 22, 
    color: '#AFB5B2',
    textDecorationLine: 'underline'
  }
});

export default SignInScreen;
