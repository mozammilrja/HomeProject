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
    title: "House",
  },
  {
    id: "2",
    title: "Appartment",
  },
  {
    id: "3",
    title: "Duplex",
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
            marginHorizontal: 14,
            marginVertical: 90,
            fontWeight: "bold",
            color:'#5C6979'
          }}
        >
          Nice! And you want to live in what type of home?
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", marginVertical: 40, fontSize: 14 }}>
          What type of home do you prefer?{" "}
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

const TypeOfHome = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("HomeType")}>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={{ height: "100%" }}>
          <View style={{ height: "30%", marginVertical: 20 }}>
            <ListHeader />
          </View>

          <View
            style={{ height: "60%", alignItems: "center", paddingVertical: 5 }}
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
  items: {
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    color: "black",
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#A8B6C826",
    width: 272,
    height: 40,
    textAlign: "center",
    fontWeight: "bold",
    color:'#323B45'
  },
});

export default TypeOfHome;
