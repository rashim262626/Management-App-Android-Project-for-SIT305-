import {createStackNavigator, createAppContainer} from 'react-navigation';
//import Splash from './screens/Splash';
import Loading from './screens/Loading';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Home from './screens/Home';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEditForm from './components/EmployeeEditForm';
//import ListItem from './components/ListItem';

//Defining navigation containing all screens of app
const MainNavigator = createStackNavigator({
  //Splash: {screen: Splash},
  Loading: {screen: Loading},
  SignInScreen: {screen: SignInScreen},
  SignUpScreen: {screen: SignUpScreen},
  Home: {screen: Home},
  EmployeeCreate: {screen: EmployeeCreate},
  EmployeeEditForm: {screen: EmployeeEditForm},
  //ListItem: {screen : ListItem}
});

//Exporting it
export default Navigation = createAppContainer(MainNavigator);
