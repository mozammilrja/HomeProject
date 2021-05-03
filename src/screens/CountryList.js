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
    title: "India",
    image: require("../images/user.png"),
  },
  {
    id: "2",
    title: "France",
  },
  {
    id: "3",
    title: "Sweden",
  },
  {
    id: "4",
    title: "Norway",
  },
  {
    id: "5",
    title: "Spain",
  },
  {
    id: "6",
    title: "USA",
  },
  {
    id: "7",
    title: "Germany",
  },
  {
    id: "8",
    title: "Andorra",
  },
  {
    id: "9",
    title: "Armenia",
  },
  {
    id: "10",
    title: "Colombia",
  },
  {
    id: "11",
    title: "India",
  },
  {
    id: "10",
    title: "Colombia",
  },
  {
    id: "11",
    title: "India",
  },
  {
    id: "10",
    title: "Colombia",
  },
  {
    id: "11",
    title: "India",
  },
];

const ListHeader = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 51, height: 57.38, marginVertical: 0 }}
            source={require("../images/logo.png")}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            width: 291,
            height: 98,
            marginBottom: 32,
            marginTop: 50,
            fontWeight: "bold",
            color: "#5C6979",
          }}
        >
          Appartment finds your new home! We collect all available homes on and
          offline , and give you access to them!
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", fontSize: 14, marginBottom: 7 }}>
          Where are you looking to live?
        </Text>
      </View>
    </View>
  );
};

const Item = ({ title, Imags }) => (
  <View>
    <View style={styles.items}>
      <Image style={{ height: 10, width: 10 }} source={Imags} />

      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const CountryList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("CityList")}>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={{ height: "100%" }}>
          <View style={{ height: "10%" }}></View>

          <View
            style={{ height: "90%", alignItems: "center", marginVertical: -10 }}
          >
            <FlatList
              ListHeaderComponent={ListHeader}
              contentContainerStyle={{ alignItems: "center" }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
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
    color: "#323B45",
  },
});

export default CountryList;
