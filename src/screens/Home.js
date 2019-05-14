import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import _ from 'lodash';
import { CardSection } from "../components/common/CardSection";
import firebase from 'firebase';
import Header from '../components/Header';
import Button from '../components/CustomButton';

/*
    Home screen class. It will render when user sign in to app or create new
    email and then sign in to app.
*/

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        totalEmployees: 1,
        name: '',
        phone: '',
        shift: '',
        loading: false,
        friends: []
    };
  }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.EmployeesFetch();
    }

    EmployeesFetch = () => {

        const { currentUser } = firebase.auth();
        var db = firebase.database();
        var ref = db.ref(`/users/${currentUser.uid}/employees/`);

        ref.on('value', snapshot => {
            const friends = _.map(snapshot.val(), (val, uid) => {
              return {...val, uid}
            });
            this.setState({friends, loading: false})
        });
    }

    //Logout user method
    onLogoutButtonPress = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigation.navigate('SignInScreen');
        } catch (e) {
            console.log(e);
        }
    }

    renderItem({item}) {
        
        const { name } = item;
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CreateEmployee')}
            >
                <CardSection>
                    <Text style={styles.employeeNameStyle} >{name}</Text>  
                </CardSection>

            </TouchableOpacity>
        );
    }

    cb = () => {
        this.props.navigation.navigate('EmployeeCreate');
    }

  render() {

    return (

        <View style={styles.viewStyle}>

            <View >
                <Header
                    onPress={() => this.props.navigation.navigate('EmployeeCreate')}
                />
            </View>
            
            {/* {this.renderEmployees()} */}
        <ImageBackground
            source={require('../images/flowers.png')}
            style={{flex: 1}}
        >

            <View style={styles.employeeContainerStyle}>
              <FlatList
                data={this.state.friends}
                renderItem={({item}) => 
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('EmployeeEditForm', {item})}
                    >
                        <CardSection>
                            <Text style={styles.employeeNameStyle} >{item.name}</Text> 
                            <Image
                                style={{height: 30, width: 30,}}
                                source={require('../images/Arrow.png')} 
                            /> 
                        </CardSection>

                    </TouchableOpacity>
                }
                keyExtractor={item => item.uid}
              />
            </View>

            <View style={{alignItems: 'center', marginBottom: 20}} >
                <Button 
                    text="Log Out"
                    onPress={() => this.onLogoutButtonPress()}
                />
            </View>
        </ImageBackground>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    instructionViewStyle: {
        marginHorizontal: 35,
        width: '80%',
        height: 700,
        justifyContent: 'center',
        alignItems: 'center'
    },
    instructionTextStyle: {
        fontSize: 20,
        textAlign: 'center'
    },
    employeeContainerStyle: {
        flex: 1,
        width: '95%',
        //marginTop: 20,
        marginVertical: '5%',
    },
    employeeTextStyle: {
        fontSize: 20,
        paddingLeft: 22,
    },
    containerStyle: {
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '95%',
        //height: 700,
        justifyContent: 'center',
        alignItems: 'center'
      },
      employeeNameStyle: {
        fontSize: 25,
        paddingLeft: 20,
        //textAlign: 'center'
      }
});

export default Home;
