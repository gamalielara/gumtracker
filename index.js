/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

if (__DEV__) {
  require('./msw.polyfills');
  const { server } = require('./src/mock/nativeServer');
  server.listen();
}

AppRegistry.registerComponent(appName, () => App);
