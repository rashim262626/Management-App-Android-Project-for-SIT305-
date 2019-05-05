import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CardSection } from "./common/CardSection";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onRowPress() {
    //this.props.onPress;
    //this.props.navigation.navigate("EmployeeEditForm", {employee: this.props.employee});
    this.props.navigation.navigate("EmployeeEditForm");
  }

  render() {
    
    const { name } = this.props.employee;
    return (
      <TouchableOpacity
        onPress={() => alert('clicked')}
      >
        <CardSection>
          <Text style={styles.employeeNameStyle} >{name}</Text>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: '95%',
    //height: 700,
    justifyContent: 'center',
    alignItems: 'center'
  },
  employeeNameStyle: {
    fontSize: 25,
    paddingLeft: 20,
    //textAlign: 'center'
  }
});

export default ListItem;
