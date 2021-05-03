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

const HomeType = ({ navigation }) => {
  const renderItem = ({ item }) => <Item title={item.title} />;

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
          <View>
            <Text
              style={{
                color: "#5C6979",
                textAlign: "center",
                marginTop: 85,
                width: 291,
                // height:124,
                fontSize: 20,
                fontWeight: "bold",
                paddingVertical: 0,
              }}
            >
              Great! We found
            </Text>
            <Text
              style={{
                color: "#5C6979",
                textAlign: "center",
                marginBottom: 0,

                width: 291,
                // height:124,
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              845
            </Text>
            <Text
              style={{
                color: "#5C6979",
                textAlign: "center",
                marginVertical: 0,
                width: 291,
                // height: 124,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              home in your filters!
            </Text>
            <Text
              style={{
                color: "#5F5F5F",
                textAlign: "center",
                marginVertical: 10,
                width: 178,
                height: 19,
                fontSize: 13.7,
                fontWeight: "bold",
                textDecorationLine: "underline",
                marginHorizontal: 50,
              }}
            >
              Continue with limited access
            </Text>
          </View>
        </View>

        <View
          style={{
            height: "40%",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <View style={{ height: "10%" }}>
            <Text
              style={{
                color: "#5C6979",
                width: 291,
                height: 157,
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                lineHeight: 20,
                marginVertical: 40,
              }}
            >
              ✅Full access to all 845 home
            </Text>
          </View>
          <View style={{ height: "10%" }}>
            <Text
              style={{
                color: "#5C6979",
                width: 291,
                height: 157,
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                lineHeight: 20,
                marginVertical: 50,
              }}
            >
              ✅No ads, a completely free and silent exprience
            </Text>
          </View>
          <View style={{ height: "10%" }}>
            <Text
              style={{
                color: "#5C6979",
                width: 291,
                height: 157,
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                lineHeight: 20,
                marginVertical: 80,
              }}
            >
              ✅ Contact the home owners directly from our app
            </Text>
          </View>
          <View style={{ height: "10%" }}>
            <Text
              style={{
                color: "#5C6979",
                width: 291,
                // height: 68,
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                lineHeight: 20,
                marginVertical: 125,
              }}
            >
              Try 3 FREE days {"\n"}
              <Text
                style={{
                  fontSize: 16,
                  color: "#5C6979",
                  width: 291,
                  lineHeight: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginVertical: 20,
                }}
              >
                then 85kr/week
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ height: "10%", backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeLocation")}>
            <Text
              style={{
                width: 300,
                height: 50,
                fontSize: 14,
                fontWeight: "bold",
                backgroundColor: "#4886FF",
                color:'white',
                borderRadius: 3,
                alignItems: "center",
                textAlign: "center",
                paddingVertical: 14,
                marginVertical: -8,
                marginHorizontal: 10,
              }}
            >
              TRY FREE AND SUBSCRIBE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "20%", backgroundColor: "white" }}>
          <Text
            style={{
              width: 324,
              height: 280,
              // fontWeight:500,
              textAlign: "center",
              letterSpacing: 0.734229,
              // marginHorizontal:'10'
              marginVertical: 10,
              opacity: 0.5,
              color: "#8B8B8B",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            typesetting,
          </Text>
        </View>
      </View>
    </>
  );
};

export default HomeType;
