import React, { version } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeCard = ({ navigation }) => {
  const DATA = [
    {
      img: require("../images/h5.jpg"),
    },
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
  ];

//   function MainHeader(item) {
//     return (
//       <>
//         <View style={{ height: 200, width: 230, backgroundColor: "white" }}>
//           <ImageBackground
//             style={{ height: 170, width: 290, paddingLeft: 20 }}
//             source={item.img}
//           >
//             <View>
//               <Text
//                 style={{
//                   marginTop: 130,
//                   fontSize: 20,
//                   color: "white",
//                 }}
//               >
//                 Kobenhavn
//               </Text>
//             </View>
//           </ImageBackground>
//         </View>
//       </>
//     );
//   }

  function Header(item) {
    return (
      <>
        <View style={{ height: 240, width: 302 }}>
        <TouchableOpacity
        onPress={() => navigation.navigate("HomeSearch")}
        >
          <ImageBackground
            style={{ height: 200, width: 342, borderRadius: 6 }}
            source={item.img}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  padding: 0,
                  marginTop: 145,
                  color: "white",
                  fontSize: 16,
                  marginLeft:10
                }}
              >
              Headline here
              </Text>
              <Text
                style={{
                  padding: 20,
                  marginTop: 130,
                  color: "white",
                  fontSize: 14,marginLeft:90,fontWeight:'bold'
                }}
              >
                12,000
              </Text>
            </View>
          <View style={{ flexDirection: "row" }}>
          <Text style={{marginBottom:80,marginTop:-20,fontSize:10,marginLeft:10,color:"white",}}>
          Start description here</Text>
          <Text style={{marginLeft:110,marginTop:-20,fontSize:10, color: "white",
        }}>kr.month</Text>
          </View>
          <View style={{backgroundColor:'red'}}>
          
          </View>
          </ImageBackground>
          </TouchableOpacity>
        
        </View>
      </>
    );
  }
  return (
    <>
      <SafeAreaView style={{}}>
        <View>
          <View>
            <FlatList
              contentContainerStyle={{
                // paddingTop: 20,
                marginHorizontal: 5,
                paddingBottom: 10,
                marginVertical: 20,
              }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({ item, index }) => Header(item, index)}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeCard;
