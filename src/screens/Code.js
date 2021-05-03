import React, { useState, useEffect } from 'react'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  StatusBar,
  Text,
  Alert,
} from 'react-native'
// import { Button, Dialog, Portal } from 'react-native-paper'


import RangeSlider from '@jesster2k10/react-native-range-slider'
import Modal from 'react-native-modal'
import auth from '@react-native-firebase/auth'
import DefaultPreference from 'react-native-default-preference'

import firestore from '@react-native-firebase/firestore'

import { FAB, Card, Title, Appbar } from 'react-native-paper'
// import Logo from '../components/Logo'
import LogoSmall from '../components/LogoSmall'

//Dimensions
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Dashboard({ navigation }) {
  const [ViewItems, setViewItems] = useState([])
  const [Datatems, setDatatems] = useState([])

  const onChange = (min, max) => {
    console.log('min: ', min)
    console.log('max: ', max)
  }
  //UseEffect
  useEffect(() => {
    SelectionLoadData()
    SizeSelectionLoadData()
    RoomSelectionLoadData()
    FetchHouse()
    FetchCities()
  }, [])

  //Fetching the data accoriding to the Countries
  var CitiesData = []
  function FetchCities() {
    firestore()
      .collection('Countries')
      .doc(CountryId)
      .collection('Cities')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, index) => {
          CitiesData.push({ id: doc.id, ...doc.data() })
        })
        setDatatems(CitiesData)
      })
  }

  var Country = 'Denmark'
  var CountryId = '38W6RQ0zuvoZjRXSXyCD'
  var CityId = 'JoxMwD1MUoJ9afvvVtkX'
  var Category = 'House'
  var Room = '4'

  //Fetched Homes According to the Conditions
  const HouseData = []
  const FetchHouse = () => {
    firestore()
      .collection('House')
      .where('CountryId', '==', CountryId)
      .where('CityId', '==', CityId)
      .where('Category', '==', Category)
      .where('Rooms', 'in', ['1', '4'])
      // .where('Size', '>=', '20')
      // .where('Size', '<=', '40')
      // .where("Rent", ">","0")
      // .where("Rent", "<","5000")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, index) => {
          HouseData.push({ id: doc.id, ...doc.data() })
        })
      })
      .then(() => {
        setViewItems(HouseData)

      })
  }

  //SIGN OUT functions -------- -------- -------- --------
  const _handleMore = () => {
    LogOutOpenAlert()
  }

  function LogOutOpenAlert(docID) {
    Alert.alert('Log out', 'Are you sure want to Log out ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => SignOut() },
    ])
  }

  function SignOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
  }
  //SIGN OUT functions End-------- -------- -------- --------

  function MainHeader() {
    return (
      <>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Datatems}
            renderItem={({ item }) => CitiesCard(item)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
    )
  }

  function CitiesCard(item) {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('House', {
              CityId: item.id,
            })
          }}
        >
          <View
            style={{
              borderRadius: 5,
              paddingRight: 18,
              paddingBottom: 20,
              paddingTop: 10,
              elevation: 10,
            }}
          >
            <ImageBackground
              style={{
                height: 260,
                width: 230,
                justifyContent: 'flex-end',
                borderRadius: 5,
                borderColor: 'red',
                overflow: 'hidden',
              }}
              source={{ uri: item.Image }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Content>
                  <Title style={{ color: 'white', fontSize: 22 }}>
                    {item.name}
                  </Title>
                </Card.Content>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  //FlatlistHomeCard
  function HomeCard(item, index) {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {
              data: item,
            })
          }}
          style={{ paddingVertical: 10, width: width - 36, borderRadius: 5 }}
        >
          <View style={styles.t}>
            <ImageBackground
              // style={{

              // }}
              style={styles.t}
              source={{ uri: item.Image }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 8,
                }}
              >
                <Card.Content>
                  <View>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                      {item.Heading}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: 'white', fontSize: 10 }}>
                      {item.Description}
                    </Text>
                  </View>
                </Card.Content>

                <Card.Content>
                  <View>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                      {item.Rent}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: 'white', fontSize: 10 }}>
                      kr. month
                    </Text>
                  </View>
                </Card.Content>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  //Dialog Box Functions

  const [visible, setVisible] = useState(false)

  //Helping Functions for Modal
  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  //Flatlist for Type selection Start ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------
  function SelectionLoadData() {
    const SelectionType = [
      {
        id: '1',
        title: 'Lejebolig',
      },
      {
        id: '2',
        title: 'Andel',
      },
    ]
    setViewSelectionItems(SelectionType)
  }

  function TypeHeader() {
    return (
      <>
        <View style={{ paddingVertical: 16 }}>
          <Text>Type</Text>
        </View>
      </>
    )
  }
  const [ViewSelectionItems, setViewSelectionItems] = useState([])
  const [selectItems, setselectItems] = useState('-1')

  function TypeSelection() {
    return (
      <>
        <View>
          <View style={{ paddingHorizontal: 4, justifyContent: 'center' }}>
            <FlatList
              horizontal
              contentContainerStyle={
                {
                  //     justifyContent: 'center',
                  //   alignSelf: 'center',
                }
              }
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              data={ViewSelectionItems}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ paddingRight: 12 }}
                  onPress={() => {
                    TypeSelections(item)
                  }}
                >
                  <View
                    style={{
                      height: 50,
                      width: 100,
                      borderRadius: 8,
                      borderWidth: 3,
                      borderColor: '#4886FF',
                      borderWidth: selectItems == item.id ? 2 : 0,
                      //   backgroundColor:"#A8B6C824",
                      backgroundColor:
                        selectItems == item.id
                          ? 'white'
                          : 'rgba(168, 182, 200, 0.1477)',
                      justifyContent: 'center',
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          textAlign: 'center',
                          alignSelf: 'center',
                          fontSize: 12,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </>
    )
  }

  function TypeSelections(item) {
    if (ViewSelectionItems[0].id == item.id) {
      setselectItems(item.id)
    } else if (ViewSelectionItems[1].id == item.id) {
      setselectItems(item.id)
    } else {
      return null
    }
  }
  //Type Selection End ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------

  // //Flatlist for Size selection Start ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------
  function SizeSelectionLoadData() {
    const SizeSelectionType = [
      {
        id: '1',
        title: '20-40',
      },
      {
        id: '2',
        title: '40-60',
      },
      {
        id: '3',
        title: '60-80',
      },
      {
        id: '4',
        title: '80+',
      },
    ]
    setViewSizeItems(SizeSelectionType)
  }

  function SizeHeader() {
    return (
      <>
        <View style={{ paddingVertical: 16 }}>
          <Text>Size</Text>
        </View>
      </>
    )
  }
  const [ViewSizeItems, setViewSizeItems] = useState([])
  const [sizeItems, setsizeItems] = useState('-1')

  function SizeSelection() {
    return (
      <>
        <View>
          <View style={{ paddingHorizontal: 4, justifyContent: 'center' }}>
            <FlatList
              horizontal
              contentContainerStyle={
                {
                  //     justifyContent: 'center',
                  //   alignSelf: 'center',
                }
              }
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              // scrollEnabled={false}
              data={ViewSizeItems}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ paddingRight: 12 }}
                  onPress={() => {
                    SizeSelections(item)
                  }}
                >
                  <View
                    style={{
                      height: 50,
                      width: 100,
                      borderRadius: 8,
                      borderWidth: 3,
                      borderColor: '#4886FF',
                      borderWidth: sizeItems == item.id ? 2 : 0,
                      //   backgroundColor:"#A8B6C824",
                      backgroundColor:
                        sizeItems == item.id
                          ? 'white'
                          : 'rgba(168, 182, 200, 0.1477)',
                      justifyContent: 'center',
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          textAlign: 'center',
                          alignSelf: 'center',
                          fontSize: 12,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </>
    )
  }

  function SizeSelections(item) {
    if (ViewSizeItems[0].id == item.id) {
      setsizeItems(item.id)
    } else if (ViewSizeItems[1].id == item.id) {
      setsizeItems(item.id)
    } else if (ViewSizeItems[2].id == item.id) {
      setsizeItems(item.id)
    } else if (ViewSizeItems[3].id == item.id) {
      setsizeItems(item.id)
    }
  }
  //Type Selection End ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------

  // //Flatlist for Rooms selection Start ---- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------
  var RoomSelectionArray = []
  const [ViewRoomItems, setViewRoomItems] = useState(['4'])
  const [RoomItems, setRoomItems] = useState([])

  function RoomSelectionLoadData() {
    const RoomSelectionType = [
      {
        id: '1',
        Rooms: '1',
      },
      {
        id: '2',
        Rooms: '2',
      },
      {
        id: '3',
        Rooms: '3',
      },
      {
        id: '4',
        Rooms: '4',
      },
    ]
    setViewRoomItems(RoomSelectionType)
  }

  function RoomHeader() {
    return (
      <>
        <View style={{ paddingVertical: 16 }}>
          <Text>Rooms</Text>
        </View>
      </>
    )
  }

  function RoomSelection() {
    return (
      <>
        <View>
          <View style={{ paddingHorizontal: 4, justifyContent: 'center' }}>
            <FlatList
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={ViewRoomItems}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ paddingRight: 12 }}
                  onPress={() => {
                    RoomSelections(item)
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: 90,
                      borderRadius: 8,
                      borderColor: '#4886FF',
                      borderWidth: RoomItems.includes(item.id) ? 2 : 0,
                      //   backgroundColor:"#A8B6C824",
                      backgroundColor: RoomItems.includes(item.id)
                        ? 'white'
                        : 'rgba(168, 182, 200, 0.1477)',
                      justifyContent: 'center',
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          textAlign: 'center',
                          alignSelf: 'center',
                          fontSize: 12,
                        }}
                      >
                        {item.Rooms}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </>
    )
  }

  function RoomSelections(item) {
    console.log('room')

    let roomsarray = [...RoomItems]
    if (roomsarray.includes(item.id)) {
      let index = roomsarray.indexOf(item.id)
      if (index != -1) {
        roomsarray.splice(index, 1)
      }
    } else {
      roomsarray.push(item.id)
    }

    console.log(roomsarray)
    setRoomItems(roomsarray)
  }
  //Type Selection End ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------

  //Modal Seprator Start ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------
  function Seprator() {
    return (
      <>
        <View>
          <View
            style={{
              backgroundColor: theme.colors.primary,
              height: 6,
              borderRadius: 6,
            }}
          ></View>
        </View>
      </>
    )
  }
  //Modal Seprator End ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------
  //Modal Button ----- ----------- ----------- ----------- ----------- ----------- ------ ----- ----------- ----------- ------
  function DialogDoneBtn() {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            hideDialog()
          }}
          style={{
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.primary,
              height: 38,
              width: 86,
              borderRadius: 19,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: theme.colors.Bg }}>Done</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  //Modal Button end ----- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ------

  return (
    <>
      <Appbar.Header style={{ backgroundColor: 'white' }}>
        <Appbar.Content
          style={{ height: 30, width: 40 }}
          title={<LogoSmall />}
        />
        <Appbar.Action
          color={theme.colors.primary}
          icon={require('../assets/signout.png')}
          onPress={_handleMore}
        />
      </Appbar.Header>
      <View style={{ justifyContent: 'center' }}>
        <FlatList
          contentContainerStyle={{
            paddingTop: 20,
            paddingLeft: 20,
            justifyContent: 'center',
            paddingBottom: 100,
          }}
          ListHeaderComponent={MainHeader()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={ViewItems}
          renderItem={({ item, index }) => HomeCard(item, index)}
          keyExtractor={(item) => item.id}
        />
      </View>

      <FAB
        color={'white'}
        icon={require('../assets/fab.png')}
        style={styles.fab}
        onPress={() => {
          showDialog()
        }}
        //  visible={visible}
      />

      <Modal
        style={
          {
            //backgroundColor:"red"   ,
            //height:height+600
          }
        }
        isVisible={visible}
        onBackdropPress={() => hideDialog()}
      >
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            bottom: 0,
            height: '70%',
            position: 'absolute',
            justifyContent: 'flex-start',
          }}
        >
          <Seprator />

          <View
            style={{
              width: '100%',
              top: 10,
              position: 'absolute',
              paddingLeft: 20,
              //    backgroundColor: 'yellow',
            }}
          >
            <TypeHeader />
            <TypeSelection />
            <SizeHeader />
            <SizeSelection />

            <RoomHeader />
            <RoomSelection />
            <View style={{ paddingVertical: 16 }}>
              <Text>Price Range</Text>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingVertical: 16,
                }}
              >
                <View>
                  <Text style={{ color: '#A8B6C8' }}>1</Text>
                </View>
                <View style={{ paddingRight: 12 }}>
                  <Text style={{ color: '#A8B6C8' }}>100,000 </Text>
                </View>
              </View>
              <RangeSlider
                style={{ height: 40 }}
                type="range" // ios only
                //  min={0}
                //   max={100}
                selectedMinimum={20} // ios only
                selectedMaximum={60} // ios only
                tintColor={theme.colors.primary}
                handleColor="#4886FF"
                handlePressedColor="#f368e0"
                tintColorBetweenHandles="#4886FF"
                onChange={onChange}
              />
              <View style={{ paddingVertical: 10 }}>
                <Text>Price range: 1 - 100,000</Text>
              </View>
            </View>

            <DialogDoneBtn />
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 30,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    right: 20,
    backgroundColor: '#4886FF',
  },
  t: {
    borderWidth: 1,
    padding: 1.5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.0001) @ 0% #000000@100%',
    borderBottomWidth: 0,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 1, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 2,
    marginLeft: 0,
    marginRight: 0.1,
    height: 260,
    justifyContent: 'flex-end',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 2,
  },
})