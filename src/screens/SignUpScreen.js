import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator  } from 'react-native';
import firebase from 'firebase';
import Logo from '../components/Logo';
import CustomButton from '../components/CustomButton';
import Input from '../components/Input';


class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '', email: '', password: '', error: '', loading: false
    };
  }

  static navigationOptions = {
    header: null
  };
  
  onSignUpButtonPress() {

    const { email, password } = this.state;
    //alert(password);
    this.setState({ error: '', loading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
        .catch(this.onSignUpFail.bind(this));
  }

  onSignUpFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
    
  }

  onSignUpSuccess() {
    this.setState({
      email: '',
      password: '',
      username: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('Home');
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <CustomButton
          text="Sign Up"
          onPress={() => this.onSignUpButtonPress()}
      />
    );
  }


  render() {
    return (
      <View style={styles.MainContainerStyle} >
        
        <Logo />

      <View style={styles.componentViewStyle} >

        <Input
          placeholder="User name"
          onChange={(text) => this.setState({username: text})}
          value={this.state.username}
          autoCapitalize = 'none'
          autoCorrect={false}
        />
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

        {/* <CustomButton
          text="Sign Up"
          onPress={() => this.onSignUpButtonPress()}
        /> */}

      {this.renderButton()}

      <View style={styles.SigninButtonStyle}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignInScreen')}
        >
          <Text style={styles.SigninTextStyle}>
            Sign In ?
          </Text>
        </TouchableOpacity>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  componentViewStyle: {
    height: 220,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  SigninButtonStyle: {
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '10%'
  }, 
  SigninTextStyle: {
    fontSize: 22, 
    color: '#AFB5B2',
    textDecorationLine: 'underline'
  }
});

export default SignUpScreen;

