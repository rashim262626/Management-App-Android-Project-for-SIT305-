import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { CardSection } from './common/CardSection';
import Button from './CustomButton';

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
    <Modal
        visible={true}
        transparent
        animationType='slide'
        onRequestClose={this.closeModal}
    >
        <View style={styles.containerStyle} >
            <CardSection style={styles.CardSection} >
                <Text style={styles.textStyle} >
                    Are you sure you want to fire this employee ?
                </Text>
            </CardSection>
            
            <CardSection style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                }}>
                <Button text="Yes" 
                onPress={this.props.onAccept}
                />
            </CardSection>

            <CardSection style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            }}>
                <Button text="No" 
                onPress={this.props.onReject}
                />
            </CardSection>
        </View>
    </Modal>
      
    );
  }
}

styles=StyleSheet.create({
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 28,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});

export default DeleteModal;
