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

  const IconHeader = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 24, height: 27, marginTop: 30 }}
          source={require("../images/logo.png")}
          resizeMode="contain"
        />
      </View>
    );
  };

  function MainHeader(item) {
    return (
      <>
        <View
          style={{
            height: 290,
            width: 225,
            // backgroundColor: "white",
            borderRadius: 14,
            // overflow: "hidden",
            borderWidth: 0,
            borderColor: "white",

            resizeMode: "cover",
          }}
        >
          <ImageBackground
            style={{
              height: 245,
              width: 210,
              paddingLeft: 20,
              padding: 5,
              alignSelf: "flex-end",
            }}
            source={item.img}
          >
            <View>
              <Text
                style={{
                  marginTop: 200,
                  fontSize: 20,
                  color: "white",
                }}
              >
                Kobenhavn
              </Text>
            </View>
          </ImageBackground>
        </View>
      </>
    );
  }

  function Header(item) {
    return (
      <>
        <View style={{ height: 220, width: 342 }}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeSearch")}>
            <ImageBackground
              style={{ height: 200, width: 342 }}
              source={item.img}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    padding: 20,
                    marginTop: 130,
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  heading-here
                </Text>
                <Text
                  style={{
                    padding: 20,
                    marginTop: 120,
                    color: "white",
                    fontSize: 16,
                    marginLeft: 90,
                  }}
                >
                  12,000
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginBottom: 80,
                    marginTop: -20,
                    fontSize: 10,
                    marginLeft: 18,
                    color: "white",
                  }}
                >
                  {" "}
                  Start description here
                </Text>
                <Text
                  style={{
                    marginLeft: 125,
                    marginTop: -20,
                    fontSize: 10,
                    color: "white",
                  }}
                >
                  kr.month
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  return (
    <>
      <IconHeader />
      <View>
        <View>
          <FlatList
            contentContainerStyle={{
              // paddingTop: 20,
              marginHorizontal: 5,
              marginVertical: 40,
            }}
            ListHeaderComponent={
              <FlatList
                style={{ borderRadius: 6 }}
                horizontal
                data={DATA}
                renderItem={({ item, index }) => MainHeader(item, index)}
                keyExtractor={(item) => item.id}
              />
            }
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item, index }) => Header(item, index)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
};

export default HomeCard;
