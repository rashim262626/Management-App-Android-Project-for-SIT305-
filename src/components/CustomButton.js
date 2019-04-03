import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

class CustomButton extends Component {

    onButtonPressHandle = () => {
        this.props.onPress;
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.containerStyle} 
                onPress={this.props.onPress}
            >
                <Text style={styles.TextStyle} >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        width: .9 * width,
        height: .08 * height,
        backgroundColor: '#FB6637',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {
        fontSize: 25,
        color: 'white',
    }
});

export default CustomButton;
