import React, {useReducer, useState, useEffect} from 'react';
import { TouchableOpacity, Text, Image, Button } from 'react-native';
import Navigator from '../../../Services/Navigator';

import { Images, Metrics, Colors } from '../../../Themes';
import { View } from 'native-base';

const ProductListScreen = (props) => {      
  const {dispatch} = props.navigation;    

  console.log('items --->>', props.navigation.state.params.items, props.navigation.state.params.base64imgs);

  goDetail = () => {
    dispatch(Navigator.goToRouteWithParams('ProductML', {items: props.navigation.state.params.items, base64imgs: props.navigation.state.params.base64imgs }));
  }

  return (
    <View style={{flex:1}} >
      <View style={{flex:1, backgroundColor: Colors.yellowML}}>
        <View style={[{flexDirection: 'row'}]}>
          
          <View style={{alignItems: 'center', justifyContent: 'center', width: Metrics.screenWidth * 0.1, paddingTop: 20}}>
            <TouchableOpacity
              // onPress={this.openDrawer}
              activeOpacity={0.1}
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}} >
                <Image style={{width: 22, height:22, resizeMode: 'contain', overflow: 'visible'}} source={Images.left_arrow} />
            </TouchableOpacity>
          </View>
           
          <View style={[ {width: Metrics.screenWidth * 0.8, justifyContent: 'center', paddingTop: 20}]}>
            <Text style={{fontSize: 24}}>{'Mi lista'}</Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center', width: Metrics.screenWidth * 0.1, paddingTop: 20}}>
            <TouchableOpacity /*onPress={() => this.props.onShowSearch()}*/>
              <Image style={{ width: 22, height: 22, resizeMode: 'contain', overflow: 'visible' }} source={Images.shopping_cart} />
            </TouchableOpacity> 
          </View> 
        </View>
      </View>
      <View style={{flex:8}}>
        {
          props.navigation.state.params !== undefined &&
          props.navigation.state.params !== null &&
          props.navigation.state.params.items !== undefined &&
          props.navigation.state.params.items !== null ?
          props.navigation.state.params.items.map((item) => {    
            return (  
            <View key={item.image} style={{ alignContent: 'flex-end', flexDirection: 'row', width: Metrics.screenWidth, height: Metrics.screenHeight * 0.2}}>   
              <View style={{flex: 2, paddingTop:20}}>
                <Image style={{ height: 80, resizeMode: 'contain' }} source={{ uri: item.image }} />
              </View>
              <View style={{flex: 8, paddingTop:30, paddingLeft: 20}}>
                <Text style={{fontSize: 18}}>{item.tag}</Text>
              </View>  
            </View>
            );
          })
          :
          null
        }
      </View>
      <View style={{height: 40, width: Metrics.screenWidth, backgroundColor: Colors.white}}>
        <Button style={{backgroundColor: Colors.blueML, height: 40}} title={'Buscar artículos'} onPress={this.goDetail} />
      </View>
      
    </View>      
  )
}

ProductListScreen.navigationOptions = {
    title: 'Products'
}

export default ProductListScreen;