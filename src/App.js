import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './screens/Splash';
import Loading from './screens/Loading';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

class App extends Component {
  render() {
    return (
      <SignUpScreen />
    );
  }
}

// const MainNavigator = createStackNavigator({
//   Splash: {screen: Splash},
//   Loading: {screen: Loading},
//   SignInScreen: {screen: SignInScreen},
//   SignUpScreen: {screen: SignUpScreen},
// });

// const Navigation = createAppContainer(MainNavigator);

export default App;
