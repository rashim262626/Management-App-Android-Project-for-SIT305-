import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import Logo from '../components/Logo';
import CustomButton from '../components/CustomButton';
import Input from '../components/Input';


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

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
    
  }

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

  handleNav() {
    this.props.navigation.navigate('Home');
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

      {this.renderButton()}

      <View style={styles.SignupButtonStyle}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.SignupTextStyle}>
            Sign Up ?
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

// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import firebase from 'firebase';
// import { Button, Card, CardSection, Input, Spinner } from './common';

// class LoginForm extends Component {
//   state = { email: '', password: '', error: '', loading: false };

//   onButtonPress() {
//     const { email, password } = this.state;

//     this.setState({ error: '', loading: true });

//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(this.onLoginSuccess.bind(this))
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(this.onLoginSuccess.bind(this))
//           .catch(this.onLoginFail.bind(this));
//       });
//   }

//   onLoginFail() {
//     this.setState({ error: 'Authentication Failed', loading: false });
//   }

//   onLoginSuccess() {
//     this.setState({
//       email: '',
//       password: '',
//       loading: false,
//       error: ''
//     });
//   }

//   renderButton() {
//     if (this.state.loading) {
//       return <Spinner size="small" />;
//     }

//     return (
//       <Button onPress={this.onButtonPress.bind(this)}>
//         Log in
//       </Button>
//     );
//   }

//   render() {
//     return (
//       <Card>
//         <CardSection>
//           <Input
//             placeholder="user@gmail.com"
//             label="Email"
//             value={this.state.email}
//             onChangeText={email => this.setState({ email })}
//           />
//         </CardSection>

//         <CardSection>
//           <Input
//             secureTextEntry
//             placeholder="password"
//             label="Password"
//             value={this.state.password}
//             onChangeText={password => this.setState({ password })}
//           />
//         </CardSection>

//         <Text style={styles.errorTextStyle}>
//           {this.state.error}
//         </Text>

//         <CardSection>
//           {this.renderButton()}
//         </CardSection>
//       </Card>
//     );
//   }
// }

// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   }
// };

// export default LoginForm;
