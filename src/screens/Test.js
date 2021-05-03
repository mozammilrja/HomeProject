import React,{useState} from "react";
import { View, Text } from "react-native";
// import RangeSlider from 'react-native-range-slider'
// import RangeSlider, { Slider } from "react-native-range-slider-expo";
import Slider from '@react-native-community/slider';
// import RangeSlider from 'rn-range-slider';

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row",marginTop:150 }}>
      <Text>helo</Text>




      <Slider
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="red"
      maximumTrackTintColor="blue"
    />
     </View>
  );
};

export default App;
