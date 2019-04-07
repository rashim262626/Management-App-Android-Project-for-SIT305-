import React, { Component } from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

class Input extends Component {

  render() {
    return (
      <TextInput 
        style={styles.containerStyle}
        placeholder={this.props.placeholder} 
        onChangeText={this.props.onChange}
        value={this.props.value}
        {...this.props}
      >
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        width: .9 * width,
        height: .08 * height,
        backgroundColor: '#DFDAD8',
        borderRadius: 12,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        fontSize: 20
    },
    TextStyle: {
        fontSize: 25,
        color: 'white',
    }
});

export default Input;
