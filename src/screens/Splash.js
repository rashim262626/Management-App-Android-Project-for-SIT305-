import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Splash extends Component {

  render() {
    return (
      <View style={styles.viewStyle} >
        <Text style={styles.titleStyle} >Manager App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
    }
});

export default Splash;
