import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
            {
              img: require("../images/h1.jpg"),
            },
            {
              img: require("../images/h2.jpg"),
            },
            {
              img: require("../images/h2.jpg"),
            },
            {
              img: require("../images/h2.jpg"),
            },
            {
              img: require("../images/h2.jpg"),
            },
            {
              img: require("../images/h3.jpg"),
            },
            {
              img: require("../images/h4.jpg"),
            },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 80,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{width:100,height:100}}>{item.img}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

