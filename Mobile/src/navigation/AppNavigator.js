import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from './screens/Splash';
import CameraScreen from './screens/Camera';
import ProductListScreen from './screens/ProductList';

const AppNavigator = createStackNavigator({
  Splash: { screen: SplashScreen},
  Camera: { screen: CameraScreen},
  ProductList: { screen: ProductListScreen},
},{
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'ProductList',
    navigationOptions: {
      headerStyle: { backgroundColor: '#FFF' }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;