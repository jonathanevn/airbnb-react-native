import React from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import axios from "axios";
import RoomCard from "../components/RoomCard";

class Room extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{ uri: params.photos[0] }} style={styles.flatImage} />
        {/*  <View style={styles.priceTag}> */}
        <Text style={styles.price}>{params.price}€</Text>
        {/* </View> */}
        <View style={styles.body}>
          <RoomCard
            title={params.title}
            reviews={params.reviews}
            ratingValue={params.ratingValue}
            userAvatar={params.user.account.photos[0]}
            hidePrice={true}
          />
        </View>
        <Text>{params.description}</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },

  body: {
    margin: 20
  },

  flatImage: {
    height: 250,
    width: "100%",
    position: "relative",
    borderRadius: 4
  },

  /*   priceTag: {
    position: "absolute",
    top: 150,
    left: 15,
    backgroundColor: "rgba(255,255,255, 0.9)",
    borderRadius: 4
  },
 */
  price: {
    fontWeight: "bold",
    color: "#262626",
    padding: 10
  }

  /*   avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 20
  }  */
});

export default Room;
