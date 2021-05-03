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

const DATA = [
  {
    id: "1",
    title: "1 room",
  },
  {
    id: "2",
    title: "2 room",
  },
  {
    id: "3",
    title: "3 room",
  },
  {
    id: "4",
    title: "4 room",
  },
  {
    id: "5",
    title: "5 or more rooms",
  },
];

const ListHeader = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            width: 291,
            height: 68,
            marginBottom: 16,
            marginHorizontal: 15,
            marginVertical: 65,
            fontWeight: "bold",   color:'#5C6979'
          }}
        >
          Amazing! What size would be interesting for you?
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", marginVertical: 35, fontSize: 14 }}>
          Where are you looking to live?{" "}
        </Text>
      </View>
    </View>
  );
};

const Item = ({ title }) => (
  <View>
    <View style={styles.items}>
      <Image style={{ height: 10, width: 10 }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const HomeType = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("HomeBudget")}>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={{ height: "100%" }}>
          <View style={{ height: "22%", marginVertical: 50 }}>
            <ListHeader />
          </View>

          <View style={{ height: "75%", textAlign: "center" }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  items: {},
  title: {
    color: "black",
    paddingVertical: 8,
    fontSize: 15,
    color: "black",
    borderRadius: 8,
    backgroundColor: "#A8B6C826",
    width: 272,
    height: 40,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 20,
    fontWeight: "bold",
    // marginTop:20
    color:'#323B45'
  },
});

export default HomeType;
