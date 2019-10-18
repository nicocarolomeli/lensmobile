import React, {useReducer, useState, useEffect} from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Navigator from '../../../Services/Navigator';

import { Images, Metrics, Colors } from '../../../Themes';

const SplashScreen = (props) => {      
  const {dispatch} = props.navigation;    

  useEffect(() => {     
    setTimeout(() => {
      dispatch(Navigator.goToRoute('Camera'));
    }, 1000);
  });

  return (
    <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.yellowML}} onPress={() => dispatch(Navigator.goToRouteWithParams('Camera', {name: 'Jane'}))} >
      <Image style={{ height: Metrics.screenHeight * 0.3, resizeMode: 'contain' }} source={Images.logo} /> 
    </TouchableOpacity>      
  )
}

SplashScreen.navigationOptions = {
    title: 'Splash'
}

export default SplashScreen;