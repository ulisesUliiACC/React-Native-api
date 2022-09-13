/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
//import {ScreenHome} from './src/screens/home';
import {Register} from './src/resgistroCount/registro';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Register);
