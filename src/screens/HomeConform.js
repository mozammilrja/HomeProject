import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const HomeConform = ({ navigation }) => (
  <View>
    <Card
      style={{
        marginTop: 120,
        width: 300,
        height: 500,
        // marginHorizontal:20,
        marginLeft: 10,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Card.Cover
          style={{
            width: 60,
            height: 57.38,
            marginTop: 40,
            color: "#2E2F4F",
            borderRadius: 2,
            backgroundColor: "white",
          }}
          source={require("../images/lock.png")}
          resizeMode="contain"
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <Card.Content>
          <Title
            style={{
              textAlign: "center",
              color: "#303030",
              fontSize: 22,
              marginTop: 20,
            }}
          >
            Wait!
          </Title>
          <Paragraph style={{ color: "#5F5F5F", textAlign: "center" }}>
            You need premium access to contact
          </Paragraph>
          <Paragraph
            style={{
              color: "#5F5F5F",
              textAlign: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            this home owner!
          </Paragraph>
        </Card.Content>
      </View>
      <View style={{ alignItems: "center" }}>
        <Card.Content>
          <Paragraph
            style={{
              textAlign: "center",
              color: "#2E2F4F",
              fontSize: 14,
            }}
          >
            ✔   We collect and add new available
          </Paragraph>
          <Paragraph
            style={{
              color: "#2E2F4F",
              fontSize: 14,
              marginLeft: 26,
            }}
          >
            homes every day
          </Paragraph>
        </Card.Content>
      </View>
      <View style={{ alignItems: "center" }}>
        <Card.Content>
          <Paragraph
            style={{
              textAlign: "center",
              color: "#2E2F4F",
              fontSize: 14,
            }}
          >
            ✔   We collect and add new available
          </Paragraph>
          <Paragraph
            style={{
              color: "#2E2F4F",
              fontSize: 14,
              marginLeft: 26,
            }}
          >
            homes every day
          </Paragraph>
        </Card.Content>
      </View>
      <View style={{ alignItems: "center" }}>
        <Card.Content>
          <Paragraph
            style={{
              textAlign: "center",
              color: "#2E2F4F",
              fontSize: 14,
            }}
          >
            ✔   We collect and add new available
          </Paragraph>
          <Paragraph
            style={{
              color: "#2E2F4F",
              fontSize: 14,
              marginLeft: 26,
            }}
          >
            homes every day
          </Paragraph>
        </Card.Content>
      </View>

      <View style={{ marginTop: 40 }}>
        <Card.Content>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeContact")}
            style={{
              backgroundColor: "#4886FF",
              width: 270,
              height: 56,
              textAlign: "center",
              borderRadius: 4,
              alignItems: "center",
            }}
          >
            <Title
              style={{
                textAlign: "center",
                paddingTop: 10,

                color: "white",
              }}
            >
              Continue
            </Title>
          </TouchableOpacity>
        </Card.Content>
        <Card.Content>
          <Paragraph
            style={{ textAlign: "center", color: "#2E2F4F", fontSize: 12 }}
          >
            Card Get the first 3 days for free hereafter you pay $4.99/month
          </Paragraph>
        </Card.Content>
      </View>
    </Card>
    <View></View>
  </View>
);

export default HomeConform;
