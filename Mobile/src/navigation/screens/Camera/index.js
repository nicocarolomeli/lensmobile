import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera-tflite';
import ImageResizer from 'react-native-image-resizer';
import outputs from '../../../../Output.json';
import File from '../../../Services/File';
import Navigator from '../../../Services/Navigator';
import _ from 'lodash';

import api from './api';

import { Colors, Metrics } from '../../../Themes/index.js';
let _currentInstant = 0;
export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      output: "",
      currentTag: "",
      items: [],
      base64imgs: [],
      finalItems: [],
      isVisible: false
    };

    this.takePicture = this.takePicture.bind(this);
  }

  processOutput({data}) {

    // const dataTest = _.map(data, item => console.log("data-----> ", item))
    
  
    const probs = _.map(data, item => _.round(item/255.0, 0.02));
    const orderedData = _.chain(data).zip(outputs).orderBy(0, 'desc').map(item => [_.round(item[0]/255.0, 2), item[1]]).value();
    const outputData = _.chain(orderedData).take(1).map(item => `${item[1]}`).join('\n').value();

    // console.log("data-----> ", orderedData)

    // const time = Date.now() - (_currentInstant || Date.now());
    const output = `${outputData}`;
    this.setState(state => ({
      output
    }));
    _currentInstant = Date.now();
  }

  prepareRatio = async () => {
    if (Platform.OS === 'android' && this.camera) {
        const ratios = await this.camera.getSupportedRatiosAsync();

        console.log('ratios------------------------------------');
        console.log(ratios);
        console.log('------------------------------------');

        // See if the current device has your desired ratio, otherwise get the maximum supported one
        // Usually the last element of "ratios" is the maximum supported ratio
        const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];
        
        this.setState({ ratio });
    }
  }

  showProducts = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  goProductList = () => {
    console.log('imgs+++', this.state.base64imgs.length)
    this.props.navigation.dispatch(Navigator.goToRouteWithParams('ProductList', {items: this.state.items, base64imgs: this.state.base64imgs}));
  }

  takePicture = async function () {
    if (this.camera) {
        const options = { quality: 0.4, base64: false, skipProcessing: false, forceUpOrientation: true };

        this.camera.takePictureAsync(options)
        .then((capturedImg) => {

            this.setState({currentTag: this.state.output});
            
            let data = capturedImg;    


            if(__DEV__){
                console.log('original Image------------------------------------');
                console.log(data);
            }                

            const { uri } = capturedImg;

            const compressFormat = 'JPEG'; // or 'PNG'
            const quality = 80; // out of 100

            ImageResizer.createResizedImage(uri, 384, 512, compressFormat, quality)
            .then((resizedImage) => { 
              File.deleteFile(uri);


              const lbase64imgs= this.state.base64imgs;
              File.convertPathToBase64(resizedImage.uri).then((res)=>{                
                this.setState({base64imgs: [...lbase64imgs,{image64:res}]})
              });

              

              // File.convertPathToBase64(uri).then((res) => console.log('------>>>>>> BASE64: ', res));
              
                if(__DEV__){
                    console.log('Ok ImageResizer with delete old------------------------------------');
                    console.log(resizedImage);
                    console.log('------------------------------------');
                }

                const litems= this.state.items;
                //File.deleteFile(resizedImage.uri);
                this.setState({items:[...litems,{image: resizedImage.uri, tag: this.state.currentTag}]});


                //TODO: Save state image path
                //this.props.setPathImage(resizedImage.uri);
                //this.objectOfWork.flagFinish = false;
                //this.props.setObjectOfWork(this.objectOfWork);
                // this.props.navigation.dispatch(Utilities.getViewNavigateParams('EvidenceScreen', {url: resizedImage.uri, store: this.state.store, category: this.state.category, question: this.state.question, questions: this.state.questions}));
                
            }).catch((err) => {
                if(__DEV__){
                    console.log('error resizer------------------------------------');
                    console.log(err);
                    console.log('------------------------------------');
                }
            });                
        }).catch((error) => {
            if(__DEV__){
                console.log('Could not capture image.');
                console.log('------------------------------------');
                console.log(error);
                console.log('------------------------------------');
            }
        });
    }
  }

  renderModal = () => {
    return (
    <View style={{flex:1, backgroundColor: Colors.yellowML}}>
      <Text>MODAL</Text>
    </View>);
  }
  
  render() {
    const modelParams = {
      file: "mobilenet_v1_1.0_224_quant.tflite",
      inputDimX: 224,
      inputDimY: 224,
      outputDim: 1001,
      freqms: 0
    };
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
                this.camera = ref;
              }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onModelProcessed={data => this.processOutput(data)}
            modelParams={modelParams}
        >
          <TouchableOpacity style={{flex:5, width: Metrics.screenWidth}} onPress={this.takePicture} onLongPress={() => this.setState({items: [], base64imgs: [], finalItems: []})}>
            <Text style={styles.cameraText}>{this.state.output}</Text>
          </TouchableOpacity> 
          <View style={{height: 40, width: Metrics.screenWidth, backgroundColor: Colors.white}}>
            <Button style={{backgroundColor: Colors.blueML, height: 40}} title={'Ver mi lista (' + this.state.items.length + (this.state.items.length > 0 ? ' items)' : this.state.items.length  == 0 ? ' items)' : ' item)')} onPress={this.goProductList} />
          </View>    
        </RNCamera>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});