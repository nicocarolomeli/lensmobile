import { Platform } from 'react-native';
import { Metrics, Colors, Images } from './';
import metrics from './Metrics';

const ApplicationStyles = {  
  total: {
    mainContainer: {
      flex: 1,
      alignItems:'center', 
      justifyContent:'center'
    },
    spaceAroundContainer: {
      alignItems:'center', 
      justifyContent:'center',
    },
    flexStartContainer: {
      alignItems:'center', 
      justifyContent:'flex-start'
    },
    clearBackGround: {
      backgroundColor: Colors.white
    },
    darkBackGround: {
      backgroundColor: Colors.darkGreyBlue
    },
    headerTitle:{
      fontSize: 18,
      width: Metrics.screenWidth * 0.67,
      textTransform: 'uppercase',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 13,
    },
    noDataStyle:{
      overflow: 'visible',
      resizeMode: 'contain',
      marginTop: Metrics.screenHeight * 0.7,
      width: Metrics.screenWidth,
      height: Metrics.screenHeight * .3,
    },
    noDataSearchStyle:{
      overflow: 'visible',
      resizeMode: 'contain',
      marginTop: Metrics.screenHeight * 0.7,
      width: Metrics.screenWidth,
      height: Metrics.screenHeight * .25,
    },
    totalplayLogo: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
    },
  }
};

export default ApplicationStyles;