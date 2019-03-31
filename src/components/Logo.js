import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class Logo extends Component {

  render() {
    return (
        <Text style={styles.textStyle} >Welcome to Manager App</Text>
    );
  }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 100,
    }
});

export default Logo;
