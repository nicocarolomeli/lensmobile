import React, { Component } from 'react';
import { View } from 'react-native';
import AppContainer from './navigation/AppNavigator';

export default class RootContainer extends Component {

  render () {
    return (
      <View style={{ flex:1 }}>
        <AppContainer 
            ref={nav => { this.navigator = nav; }}
        />   
      </View>
    )
  }
}