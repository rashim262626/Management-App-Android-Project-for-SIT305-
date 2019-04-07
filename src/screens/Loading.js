import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

class Loading extends Component {

    static navigationOptions = {
        header: null
    };

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyCZjnwQKgr7lMoejMmhrSCodBIuCyatL7I",
            authDomain: "managerapp-e90c3.firebaseapp.com",
            databaseURL: "https://managerapp-e90c3.firebaseio.com",
            projectId: "managerapp-e90c3",
            storageBucket: "managerapp-e90c3.appspot.com",
            messagingSenderId: "141175744105"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('SignInScreen');
            }
        });
    }

    render() {
        return (
        <View style={styles.containerStyle} >
            <Text style={styles.textStyle} >LOADING</Text>
            <ActivityIndicator size='large' color='white' />
        </View>
        );
    }
}

const styles = StyleSheet.create ({
    containerStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A7C7B'
    },
    textStyle : {
        fontSize: 20,
        color: 'white',
        paddingBottom: 20,
    }
});

export default Loading;
