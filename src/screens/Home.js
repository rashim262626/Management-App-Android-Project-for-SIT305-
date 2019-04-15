import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
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
    };
  }

    static navigationOptions = {
        header: null
    };

    //Logout user method
    onLogoutButtonPress = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigation.navigate('SignInScreen');
        } catch (e) {
            console.log(e);
        }
    }

    //Rendering list of employees added
    renderEmployees() {
        if(this.state.totalEmployees > 0) {
            return(
                <View style={styles.employeeContainerStyle} >
                    <Text style={styles.employeeTextStyle}>Emplyee</Text>
                    <Text style={styles.employeeTextStyle}>Emplyee</Text>
                    <Text style={styles.employeeTextStyle}>Emplyee</Text>
                    <Text style={styles.employeeTextStyle}>Emplyee</Text>
                    <Text style={styles.employeeTextStyle}>Emplyee</Text>
                    <Text style={styles.employeeTextStyle}>Emplyee</Text>
                    <Text style={styles.employeeTextStyle}>Emplyee</Text>
                </View>
            );
        }

        return (
            <View style={styles.instructionViewStyle} >
                <Text style={styles.instructionTextStyle} >
                    Add employees by pressing Add button
                </Text>
            </View>
        );
    }

    //Render method of home screen
  render() {

    return (

        <View style={styles.viewStyle}>

            <View >
                <Header 
                    onPress={() => this.props.navigation.navigate("CreateEmployee")}
                />
            </View>
            
            {this.renderEmployees()}

            <View style={{alignItems: 'center'}} >
                <Button 
                    text="Log Out"
                    onPress={() => this.onLogoutButtonPress()}
                />
            </View>
            
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
        //flex: 1,
        width: '95%',
        //marginTop: 20,
        marginVertical: '5%',
    },
    employeeTextStyle: {
        fontSize: 20,
        paddingLeft: 22,
    }
});

export default Home;
