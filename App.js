import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
  
  render(){
    const example = "React Native variabel eksempel";

    return (
      
      <View style={styles.HelloWorldView}>
        <Text style={styles.HelloWorldText}>{example}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  HelloWorldView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HelloWorldText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});