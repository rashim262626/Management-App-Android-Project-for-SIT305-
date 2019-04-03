import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.viewStyle} >
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    
});

export default Home;
