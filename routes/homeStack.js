import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import LunchSpecials from '../screens/LunchSpecials';
import Home from '../screens/Home'

const screens = {
  Home: {
    screen: Home
  },
  LunchSpecials: {
    screen: LunchSpecials
  }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
