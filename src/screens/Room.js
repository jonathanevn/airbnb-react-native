import React from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import RoomCard from "../components/RoomCard";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView from "react-native-maps";

class Room extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{ uri: params.photos[0] }} style={styles.flatImage} />

        <View style={styles.priceTag}>
          <Text style={styles.price}>{params.price}€</Text>
        </View>

        <View style={styles.body}>
          <RoomCard
            title={params.title}
            reviews={params.reviews}
            ratingValue={params.ratingValue}
            userAvatar={params.user.account.photos[0]}
            hidePrice={true}
          />
          <Text style={styles.description} numberOfLines={4}>
            {params.description}
          </Text>
        </View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: params.loc[1],
            longitude: params.loc[0],
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: params.loc[1],
              longitude: params.loc[0]
            }}
            title={params.title}
            description={params.city.name}
            image={require("../images/location-pointer.png")}
          />
        </MapView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },

  body: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20
  },

  flatImage: {
    height: 250,
    width: "100%",
    position: "relative",
    borderRadius: 4
  },

  priceTag: {
    position: "absolute",
    top: 200,
    left: 15,
    backgroundColor: "rgba(255,255,255, 0.9)",
    borderRadius: 4
  },

  price: {
    fontWeight: "bold",
    color: "#262626",
    padding: 10
  },

  description: {
    color: "#262626"
  }
});

export default Room;
