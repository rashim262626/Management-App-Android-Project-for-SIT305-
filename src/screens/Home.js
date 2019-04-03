import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        totalEmployees: 0,
        name: '',
        phone: '',
        shift: '',
    };
  }

  static navigationOptions = {
    header: null
  };

    renderEmployees() {
        if(this.state.totalEmployees > 0) {
            return;
        }

        return (
            <View style={styles.instructionViewStyle} >
                <Text style={styles.instructionTextStyle} >
                    Add employees by pressing Add button
                </Text>
            </View>
        );
    }

  render() {

    return (

        <View>

            <View style={styles.viewStyle} >
                <Header 
                    onPress={() => this.props.navigation.navigate("CreateEmployee")}
                />
            </View>
            
            {this.renderEmployees()}
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    instructionViewStyle: {
        marginHorizontal: 35,
        width: '80%',
        height: 700,
        justifyContent: 'center',
        alignItems: 'center'
    },
    instructionTextStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default Home;
