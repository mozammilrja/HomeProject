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
    title: "Below 5.000",
  },
  {
    id: "2",
    title: "Below 10.000",
  },
  {
    id: "3",
    title: "Below 15.000",
  },
  {
    id: "4",
    title: "Below 20.000",
  },
  {
    id: "5",
    title: "Above 20.000",
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
            marginBottom: 20,
            marginHorizontal: 10,
            marginVertical: 100,
            fontWeight:'bold',
            color:'#5C6979'
          }}
        >
          What's your budget?
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", marginVertical: 10, color:'#5C6979' }}>
          What is your monthly housing budget?{" "}
        </Text>
      </View>
    </View>
  );
};

const Item = ({ title, Imags }) => (
  <View>
    <View style={styles.items}>
      <Image style={{ height: 10, width: 10 }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const HomeType = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("HomeFilter")}>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={{ height: "100%" }}>
          <View style={{ height: "22%", marginVertical: 10 }}>
            <ListHeader />
          </View>

          <View
            style={{
              height: "75%",
              alignItems: "center",
              paddingVertical: 5,
              marginTop: 50,
            }}
          >
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
    fontSize: 15,
    color: "black",
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#A8B6C826",
    width: 272,
    height: 40,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    color:'#323B45'
  },
});

export default HomeType;
