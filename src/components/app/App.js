import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ImageScreen } from '../../screens';
import { HOME_SCREEN, IMAGE_SCREEN } from '../../routes';

const AppNavigator = createStackNavigator(
  {
    HOME_SCREEN: {
      screen: HomeScreen,
    },
    IMAGE_SCREEN: {
      screen: ImageScreen,
    },
  },
  {
    initialRouteName: HOME_SCREEN,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#34495e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
