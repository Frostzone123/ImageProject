import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CameraScreen from './component/CameraScreen';

export default class cameraRollExample extends Component {
  render() {
    return (
      <CameraScreen/>
    );
  }
}

AppRegistry.registerComponent('cameraRollExample', () => cameraRollExample);