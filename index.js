import {
  AppRegistry,
  YellowBox
} from 'react-native';
import App from './src/app';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
]);

AppRegistry.registerComponent('DvaTS', () => App);