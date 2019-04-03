import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import Input from './Input';
import Button from './CustomButton';

class EmployeeCreate extends Component {
     
    constructor(props) {
        super(props);
        this.state = { pickerValue: "Monday" };
    }

    handleChangeDayState = (value) => {
        this.setState({ pickerValue: value });
    }

  render() {
    return (
        <View style={{flex: 1}} >
            <View style={styles.headerStyle} >
                <Text style={styles.headerTextStyle} >Create Employee</Text>
            </View>
        
            <View style={{alignItems: 'center', marginTop: 50}} >
                <View style={styles.componentViewStyle} >
                    <Input
                        label="Name"
                        placeholder="Jane"
                    />
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                    <Picker
                        selectedValue={this.state.pickerValue}
                        onValueChange={this.handleChangeDayState.bind(this)}
                        style={{marginBottom: 30}}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>

                    <Button
                        text="Create" 
                    />
                </View>
            </View>

        </View>

        
    );
  }
}

const styles = StyleSheet.create({
    headerStyle: {
        width: '100%',
        height: 100,
        backgroundColor: '#FB6637',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center' ,
    },
    headerTextStyle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 25,
        //padding: 10,
    },
    componentViewStyle: {
        height: 600,
        justifyContent: 'space-around',
        //marginBottom: 40,
    }
});

export default EmployeeCreate;
