import React, { Component } from 'react';
import { View, StyleSheet,  } from 'react-native';
import Logo from '../components/Logo';
import CustomButton from '../components/CustomButton';
import Input from '../components/Input';


class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.MainContainerStyle} >
        
        <Logo />

      <View style={styles.componentViewStyle} >

        <Input
          placeholder="User name"
        />
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Password"
        />
      </View>

        <CustomButton
          text="Sign Up"
          onPress={() => this.props.navigation.navigate('Home')}
        />

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
  }
});

export default SignUpScreen;

