import React, {useReducer, useState, useEffect} from 'react';
import { TouchableOpacity, Text, Image, Button, Linking } from 'react-native';
import Navigator from '../../../Services/Navigator';

import { Images, Metrics, Colors } from '../../../Themes';
import { View } from 'native-base';

import api from './api';

// const data = 
// [ 
//   { 
//     image: 'file:///data/user/0/com.mercadolibre.mercadolens/cache/1571367965667.JPEG', 
//     tag: 'studio couch'
//   },
//   { 
//     image: 'file:///data/user/0/com.mercadolibre.mercadolens/cache/1571367976636.JPEG', 
//     tag: 'tub'
//   } 
// ];

export default class ProductMLScreen extends React.Component {

  
     
  state = {
    searchResults: []
  }

  componentDidMount(){
    const litems = this.props.navigation.state.params.items;
    const lbase64 = this.props.navigation.state.params.base64imgs;

    for(let i = 0; i < litems.length; i++){
      let litem = { picture: lbase64[i].image64, tag: litems[i].tag }

      api.getProductsByImage(litem)
      .then(response => {
        if (response instanceof Error) {
          console.log('datos servicio error ---> ',response);
        } else {
          console.log('datos servicio ---> ',response);
          // if(response.id === undefined){
          //   console.log('not okey');
          //   // let lfinalItems = this.state.searchResults;
          //   // this.setState({searchResults: [...lfinalItems, {searchResults: []}]});

          // }else{
            // let lfinalItems = this.state.searchResults;
            this.setState({searchResults: response});
          // }
        }
      });
    }
  }

  addToCart(item, search){
    console.log('+++CART', item.image, search.url);
    // let cItem = this.state.searchResults.find(x => x.image === item.image);
    // if(cItem !== undefined){
    //   let cSearch = cItem.searchResults.find(x => x.id === search.id);
    //   if(cSearch !== undefined){
    //     cSearch.selected = true;
    //   }
    // }

    Linking.canOpenURL(search.url).then(
      supported => {
        if(!supported && __DEV__){
          // console.log('Can\'t hanle url: ' + url);
        } else {
          return Linking.openURL(search.url);
        }
      }
    ).catch(
      err => console.error('An error ocurred', err)
    );
    
  }

  render(){
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
              <Text style={{fontSize: 24}}>{'Artículos encontrados'}</Text>
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
            this.props.navigation.state.params !== undefined &&
            this.props.navigation.state.params !== null &&
            this.props.navigation.state.params.items !== undefined &&
            this.props.navigation.state.params.items !== null ?
            this.props.navigation.state.params.items.map((item) => {
              return ( 
                <View key={item.image}> 
                  <View style={{ alignContent: 'flex-end', flexDirection: 'row', width: Metrics.screenWidth, height: Metrics.screenHeight * 0.2}}>   
                    <View style={{flex: 2, paddingTop:20}}>
                      <Image style={{ height: 80, resizeMode: 'contain' }} source={{ uri: item.image }} />
                    </View>
                    <View style={{flex: 8, paddingTop:30, paddingLeft: 20}}>
                      <Text style={{fontSize: 18}}>{item.tag}</Text>
                    </View>  
                  </View>
                  <View style={{flexDirection: 'row', width: Metrics.screenWidth}}>   
                  {
                    this.state.searchResults.map((search) => { 
                      return (
                        <TouchableOpacity 
                        key={search.id}
                        style={{width: 120, height: 120, justifyContent: 'flex-start', borderColor: Colors.blueML, borderWidth:1}}
                        onPress={()=>this.addToCart(item, search)}>
                          <Text style={{fontSize: 10, color: Colors.black, textAlign: 'center'}}>{search.name}</Text>
                          <Text style={{fontSize: 10, color: Colors.black, textAlign: 'center'}}>{search.price == null ? 0 :search.price}</Text>
                          <Image style={{ height: 50, resizeMode: 'contain' }} source={{ uri: search.imageUrl }} />
                        </TouchableOpacity>
                      )                    
                    })
                  }
                  </View>
                </View>              
              );
            })
            :
            null
          }
        </View>
        <View style={{height: 40, width: Metrics.screenWidth, backgroundColor: Colors.white}}>
          <Button style={{backgroundColor: Colors.blueML, height: 40}} title={'Agregar al carrito'} onPress={this.goDetail} />
        </View>
        
      </View>      
    );
  }
  
}