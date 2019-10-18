import React, {useReducer, useState, useEffect} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Navigator from '../../../Services/Navigator';

import { Images, Metrics } from '../../../Themes';

const ProductListScreen = (props) => {      
  const {dispatch} = props.navigation;    

  console.log('items --->>', props.navigation.state.params.items);

  return (
    <TouchableOpacity style={{flex:1}} >
      <Text>wololoooo</Text>
    </TouchableOpacity>      
  )
}

ProductListScreen.navigationOptions = {
    title: 'Products'
}

export default ProductListScreen;