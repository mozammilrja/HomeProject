import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Copenhagen",
  },
  {
    id: "2",
    title: "Aarhus",
  },
  {
    id: "3",
    title: "Odense",
  },
  {
    id: "4",
    title: "Aalborg",
  },
  {
    id: "5",
    title: "Hillerod",
  },
  {
    id: "6",
    title: "Vejle",
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
            marginVertical: 50,
            fontWeight: "bold", color:'#5C6979'
          }}
        >
          Great place. What are you looking for in ?
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", marginVertical: 20, fontSize: 14 }}>
          What city would you explore?
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

const CityList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("TypeOfHome")}>
        <Item title={item.title} />
      </TouchableOpacity>

     <TouchableOpacity

     onPress={() => navigation.goBack('HomeFilter')} />
    </View>
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white",marginTop:30 }}>
        <View style={{ height: "100%" ,alignItems:'center'}}>
          <View style={{ height: "22%", marginVertical: 20 ,alignItems:'center'}}>
            <ListHeader />
          </View>

          <View
            style={{
              height: "75%",
              alignItems: "center",
              paddingVertical: 5,
              fontWeight: "bold",textAlign:'center'
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
    color:'#323B45'
   
  },
});

export default CityList;
