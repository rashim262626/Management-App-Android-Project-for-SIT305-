import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CardSection } from "./common/CardSection";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onRowPress() {
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
          {/* <Image
            style={{height: 70, width: 70}}
            source={require('../images/Arrow.png')} 
          /> */}
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
