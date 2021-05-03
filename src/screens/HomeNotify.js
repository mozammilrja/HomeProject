import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const HomeNotify = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ height: "100%",}}>
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
              marginVertical: 120,
              fontWeight: "bold",
              lineHeight: 24,
              color:'#5C6979'
            }}
          >
            CAN WE NOTIFY YOU?
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
            style={{ width: 400, height: 200, backgroundColor: "#FFFFFF" }}
            source={require("../images/notification.png")}
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
              height: 50,
              textAlign: "center",
              marginVertical: 20,
              color: "#5F5F5F",
              fontSize: 18,
              lineHeight: 25,
            }}
          >
            Get notifications for new offers, and updates of your services.
          </Text>
        </View>

        <View style={{ height: "10%", backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeCard")}>
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
                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              Enable Push Notification
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
              marginVertical: 10,
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

export default HomeNotify;
