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

const HomeDetails = ({ navigation }) => {
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
  const Array = [
    {
      id: "1",
      title: "Category",
      dis: "Lejebolig",
      icon: require("../images/user.png"),
    },
    {
      id: "2",
      title: "Deposite",
      dis: "40.000",
      icon: require("../images/user.png"),
    },
    {
      id: "2",
      title: "Size",
      dis: "45 kvm",
      icon: require("../images/user.png"),
    },
    {
      id: "2",
      title: "Rooms",
      dis: "4",
      icon: require("../images/user.png"),
    },
    {
      id: "7",
      title: "A/C",
      dis: "Semifurnished",
      icon: require("../images/user.png"),
    },
    {
      id: "8",
      title: "Location",
      dis: "Copenhagen",
      icon: require("../images/user.png"),
    },
    {
      id: "10",
      title: "Pets",
      dis: "Yes",
      icon: require("../images/user.png"),
    },
  ];

  function Heading() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }

  function MainHeader(item) {
    return (
      <>
        <View style={{ height: 225, width: 230, backgroundColor: "white" }}>
          <TouchableOpacity>
            <ImageBackground
              style={{ height: 230, width: 300, paddingLeft: 200 }}
              source={item.img}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  function Header(item) {
    return (
      <>
        <View></View>
        <View style={{ height: 70, width: 342 }}>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 0,
              color: "#4886FF",
              Width: 54,
              fontSize: 18,
              marginHorizontal: 25,
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              marginTop: 0,
              marginBottom: 10,
              color: "#453333",
              fontSize: 14,
              marginHorizontal: 28,
            }}
          >
            {" "}
            {item.dis}
          </Text>

          <View
            style={{
              marginTop: -50,
              marginHorizontal: 5,
            }}
          >
            <Image
              style={{ height: 17, width: 17, tintColor: "#000000" }}
              source={item.icon}
            ></Image>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("HomeConform")}>
            <ImageBackground
              style={{ height: 30, width: 342, borderRadius: 6 }}
              source={item.img}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  return (
    <>
      <View>
        <View style={{ height: "100%", backgroundColor: "" }}>
          <FlatList
            contentContainerStyle={{
              marginHorizontal: 10,
              paddingBottom: 80,
              marginVertical: 20,
              marginTop: -70,
            }}
            ListHeaderComponent={
              <FlatList
                horizontal
                data={DATA}
                renderItem={({ item, index }) => MainHeader(item, index)}
                keyExtractor={(item) => item.id}
              />
            }
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Array}
            renderItem={({ item, index }) => Header(item, index)}
            keyExtractor={(item) => item.id}
          />

          <View style={{ wirdth: 0, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeConform")}
            >
              <Text
                style={{
                  borderRadius: 9,
                  textAlign: "center",
                  width: 280,
                  height: 60,
                  marginHorizontal: 30,
                  backgroundColor: "#4886FF",
                  paddingVertical: 15,
                  marginBottom: 50,
                  marginVertical: 20,
                  color: "white",
                }}
              >
                Contact Owner
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeDetails;
