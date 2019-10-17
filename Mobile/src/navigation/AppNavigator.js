import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from './screens/Splash';
import CameraScreen from './screens/Camera';

const AppNavigator = createStackNavigator({
  Splash: { screen: SplashScreen},
  Camera: { screen: CameraScreen},
},{
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Splash',
    navigationOptions: {
      headerStyle: { backgroundColor: '#FFF' }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;