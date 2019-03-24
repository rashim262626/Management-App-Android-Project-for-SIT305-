import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

class Loading extends Component {

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
