import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from './screens/Splash';
import CameraScreen from './screens/Camera';
import ProductListScreen from './screens/ProductList';
import ProductMLScreen from './screens/ProductML';

const AppNavigator = createStackNavigator({
  Splash: { screen: SplashScreen},
  Camera: { screen: CameraScreen},
  ProductList: { screen: ProductListScreen},
  ProductML: { screen: ProductMLScreen},

},{
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Camera',
    navigationOptions: {
      headerStyle: { backgroundColor: '#FFF' }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;