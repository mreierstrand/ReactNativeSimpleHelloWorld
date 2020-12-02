import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
  
  render(){

    return (

      <View style={styles.HelloWorldView}>
      <StatusBar hidden />
        <Text style={styles.HelloWorldText}>Første View</Text>
          <View  style={{backgroundColor:'yellow',margin:5, width: 350, height: 450, alignItems: 'center'}}>
           <Text style={{fontSize: 30}}>Andet View</Text>
            <View style={{backgroundColor:'green',margin:5, width: 330, height: 395,alignItems: 'center'}}>
              <Text style={{fontSize: 30}}>Tredje View</Text>
            </View>
          </View>
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
    fontSize: 50,
    fontWeight: 'bold',
  },
});


