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
import Slider from "@react-native-community/slider";

const HomeSearch = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      title: "Lejebol",
    },
    {
      id: "2",
      title: "Andel",
    },
  ];

  const Array = [
    {
      id: "1",
      title: "20-40",
    },
    {
      id: "2",
      title: "40-60",
    },
    {
      id: "3",
      title: "60-808",
    },
    {
      id: "4",
      title: "80+7",
    },
    {
      id: "4",
      title: "80+7",
    },
    {
      id: "4",
      title: "80+7",
    },
  ];

  const ArrayRoom = [
    {
      id: "1",
      title: "1",
    },
    {
      id: "2",
      title: "2",
    },
    {
      id: "3",
      title: "3",
    },
    {
      id: "4",
      title: "4",
    },
    {
      id: "4",
      title: "4",
    },
    {
      id: "4",
      title: "4",
    },
  ];

  // -------------------------Type-----------------------
  function TypeHeader() {
    return (
      <>
        <View style={{ paddingVertical: 16 }}>
          <Text style={{ marginLeft: 40, paddingTop: 60,fontSize:16 }}>Type</Text>
        </View>
      </>
    );
  }

  // ----------------------------Size------------------------

  function Type() {
    return (
      <>
        <View style={{ paddingVertical: 16 }}>
          <Text style={{ marginLeft: 40, paddingTop: 20,fontSize:16 }}>Size</Text>
        </View>
      </>
    );
  }

  // -------------------------------------Room------------------------

  function RoomType() {
    return (
      <>
        <View style={{ paddingVertical: 16 }}>
          <Text style={{ marginLeft: 40, paddingTop: 20 ,fontSize:16}}>Rooms</Text>
        </View>
      </>
    );
  }

  function Header(item) {
    return (
      <>
        <View>
          <View>
            <Text> {item.title}</Text>
          </View>
        </View>
      </>
    );
  }
  return (
    <>
      <View>
        <TypeHeader />
        <View style={{ paddingHorizontal: 4, justifyContent: "center" }}>
          <FlatList
            horizontal
            contentContainerStyle={{
              marginHorizontal: 30,

              marginVertical: 0,
              flexDirection: "row",
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ paddingRight: 1 }}
                onPress={() => {
                  Header(item);
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 90,
                    borderRadius: 8,
                    borderWidth: 3,
                    borderColor: "#4886FF",
                    justifyContent: "center",
                    padding: 10,
                    marginHorizontal: 5,
                    marginBottom: 0,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        alignSelf: "center",
                        fontSize: 12,
                      }}
                    >
                      {" "}
                      {item.title}{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <View>
        <Type />
        <View style={{ paddingHorizontal: 4, justifyContent: "center" }}>
          <FlatList
            horizontal
            contentContainerStyle={{
              marginHorizontal: 30,

              marginVertical: 0,
              flexDirection: "row",
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Array}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ paddingRight: 1 }}
                onPress={() => {
                  Header(item);
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 90,
                    borderRadius: 8,
                    borderWidth: 3,
                    borderColor: "#4886FF",
                    justifyContent: "center",
                    padding: 10,
                    marginHorizontal: 5,
                    marginBottom: 0,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        alignSelf: "center",
                        fontSize: 12,
                      }}
                    >
                      {" "}
                      {item.title}{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View>
        <RoomType />
        <View style={{ paddingHorizontal: 4, justifyContent: "center" }}>
          <FlatList
            horizontal
            contentContainerStyle={{
              marginHorizontal: 30,

              marginVertical: 0,
              flexDirection: "row",
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={ArrayRoom}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ paddingRight: 1 }}
                onPress={() => {
                  Header(item);
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 90,
                    borderRadius: 8,
                    borderWidth: 3,
                    borderColor: "#4886FF",
                    justifyContent: "center",
                    padding: 10,
                    marginHorizontal: 5,
                    marginBottom: 0,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        alignSelf: "center",
                        fontSize: 12,
                      }}
                    >
                      {" "}
                      {item.title}{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <View>
        <Text  style={{ color: "#323B45",marginTop:50,marginHorizontal: 40,fontSize:15}}>Price Range</Text>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            // paddingVertical: 6,
          }}
        >
          <View  style={{ paddingLeft: 5 , marginTop:20}}>
            <Text style={{ color: "#A8B6C8",marginLeft:35, }}>1</Text>
          </View>
          <View style={{ paddingRight: 12 ,}}>
            <Text style={{ color: "#A8B6C8",marginTop:20 }}>100,000 </Text>
          </View>
        </View>
      </View>

      <Slider
        style={{ width: "90%", height: 25,marginLeft:25 }}
        minimumValue={10}
        maximumValue={1}
        minimumTrackTintColor="#4886FF"
        maximumTrackTintColor="#4886FF"
      />

      <View>

      <View>
      <Text  style={{ color: "#323B45",marginTop:5,marginHorizontal: 40,fontSize:13}}>Price range: 1 - 100,000.</Text>
      </View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeRent")}>
          <Text
            style={{
              borderRadius: 21,
              textAlign: "center",
              width: 90,
              height: 45,
              backgroundColor: "#4886FF",
              paddingVertical: 12,
              marginTop: 20,
              marginVertical: 10,
              color: "white",
              marginLeft: 30,fontSize:14, fontWeight: "bold",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeSearch;
