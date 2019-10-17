import React, {useReducer, useState, useEffect} from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Navigator from '../../../Services/Navigator';

import { Images, Metrics } from '../../../Themes';

const SplashScreen = (props) => {      
  const {dispatch} = props.navigation;    
  return (
    <TouchableOpacity style={{flex:1}} onPress={() => dispatch(Navigator.goToRouteWithParams('Camera', {name: 'Jane'}))} >
      <Image style={{ height: Metrics.screenHeight * 0.5, resizeMode: 'contain' }} source={Images.logo} /> 
    </TouchableOpacity>      
  )
}

SplashScreen.navigationOptions = {
    title: 'Splash'
}

export default SplashScreen;