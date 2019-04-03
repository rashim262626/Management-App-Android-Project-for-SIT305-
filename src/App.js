import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './screens/Splash';
import Loading from './screens/Loading';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Home from './screens/Home';
import CreateEmployee from './components/EmployeeCreate';

// class App extends Component {
//   render() {
//     return (
//       <CreateEmployee />
//     );
//   }
// }

const MainNavigator = createStackNavigator({
  //Splash: {screen: Splash},
  //Loading: {screen: Loading},
  SignInScreen: {screen: SignInScreen},
  SignUpScreen: {screen: SignUpScreen},
  Home: {screen: Home},
  CreateEmployee: {screen: CreateEmployee}
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
//export default App;
