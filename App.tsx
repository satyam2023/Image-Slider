/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';

import Slider from './src/view/ImageSlider/Slider';





function App(): React.JSX.Element {
  
  return (
    <SafeAreaView >
      <Slider/>
    </SafeAreaView>
  );
}



export default App;
