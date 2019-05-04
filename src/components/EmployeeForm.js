import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEditForm from './EmployeeEditForm';
import Input from './Input';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pickerValue: "Monday",
        name: '',
        phone: '',
        shift: 'Monday',
        loading: false
    };
  }

  render() {
    return (
    
        <View style={styles.componentViewStyle} >
            
        </View>

    );
  }
}

const styles = StyleSheet.create({
    componentViewStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default EmployeeForm;
