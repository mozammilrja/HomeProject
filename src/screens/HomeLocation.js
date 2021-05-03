import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const HomeLocation = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ height: "100%" }}>
        <View
          style={{
            height: "30%",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: 275,
              height: 24,
              fontSize: 20,
              textAlign: "center",
              color: "#5C6979",
              marginVertical: 76,
              fontWeight: "bold",
              lineHeight: 24,
            }}
          >
            Access Your Location
          </Text>
        </View>

        <View
          style={{
            height: "30%",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 320, height: 140, backgroundColor: "#FFFFFF" }}
            source={require("../images/Licon.png")}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            height: "20%",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: 275,
              height: 75,
              textAlign: "center",
              marginVertical: 20,
              color: "#5F5F5F",
              fontSize: 18,
              lineHeight: 25,
            }}
          >
            The golden rule of super ants is location. Please enable location to
            get your services.
          </Text>
        </View>

        <View style={{ height: "10%", backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeNotify")}>
            <Text
              style={{
                width: 300,
                height: 50,
                fontSize: 14,
                fontWeight: "bold",
                backgroundColor: "#1B98F5",
                color: "white",
                borderRadius: 3,
                alignItems: "center",
                textAlign: "center",
                paddingVertical: 14,
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              Enable Location Service
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "10%",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: 109,
              height: 19,
              textAlign: "center",
              letterSpacing: 0.734229,
              marginVertical: 20,
              fontSize: 14,
              color: "#5F5F5F",
            }}
          >
            Do not allow
          </Text>
        </View>
      </View>
    </>
  );
};

export default HomeLocation;
