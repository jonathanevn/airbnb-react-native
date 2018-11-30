import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import RoomCard from "../components/RoomCard";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView from "react-native-maps";
import StarRating from "react-native-star-rating";

class Room extends React.Component {
  static navigationOptions = {
    headerTintColor: "#262626"
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.topContainer}>
        <ScrollView style={styles.contentContainer}>
          <Image source={{ uri: params.photos[0] }} style={styles.flatImage} />

          <View style={styles.priceTag}>
            <Text style={styles.price}>
              {params.price}€<Text style={styles.priceNight}> /NUIT</Text>
            </Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>{params.title}</Text>

            <View style={styles.starRating}>
              <StarRating
                disabled={false}
                maxStars={5}
                starSize={13}
                fullStarColor="#FE5B5E"
                emptyStarColor="#FE5B5E"
                rating={params.ratingValue}
              />
              <Text style={styles.rating}>
                {params.reviews} <Text>reviews</Text>
              </Text>
            </View>

            <View style={styles.user}>
              <View style={styles.userInfo}>
                <Text>
                  Host: {""}
                  <Text style={styles.username}>
                    {params.user.account.username}
                  </Text>
                </Text>
                <Text>{params.city.name}, France</Text>
              </View>
              <Image
                source={{ uri: params.user.account.photos[0] }}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.description} numberOfLines={4}>
              {params.description}
            </Text>
          </View>
          <View style={styles.mapSection}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: params.loc[1],
                longitude: params.loc[0],
                latitudeDelta: 0.009,
                longitudeDelta: 0.009
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
          </View>
        </ScrollView>
        <View style={styles.buttonBar}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>BOOK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },

  topContainer: {
    flex: 1
  },

  body: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20
  },

  flatImage: {
    height: 250,
    width: "100%",
    position: "relative"
  },

  priceTag: {
    position: "absolute",
    top: 230,
    right: 15,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 50
  },

  price: {
    fontWeight: "700",
    color: "#262626",
    fontFamily: "Karla",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15
  },

  priceNight: {
    fontFamily: "Karla",
    color: "#262626",
    fontSize: 12
  },

  user: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#262626",
    paddingVertical: 30,
    fontFamily: "Karla"
  },

  username: {
    fontWeight: "700",
    fontFamily: "Karla"
  },

  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
    marginBottom: 5
  },

  title: {
    fontSize: 25,
    color: "#262626",
    fontWeight: "700",
    marginBottom: 5,
    fontFamily: "Karla"
  },

  starRating: {
    flexDirection: "row",
    alignItems: "center"
  },

  rating: {
    color: "#C2C2C2",
    paddingLeft: 10,
    fontFamily: "Karla"
  },

  description: {
    color: "#262626",
    fontFamily: "Karla",
    fontSize: 15
  },

  mapSection: {
    height: 400
  },

  map: {
    flex: 1
  },

  button: {
    backgroundColor: "#FE5B5E",
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2
  },

  buttonBar: {
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    paddingVertical: 15,
    color: "white",
    fontWeight: "700",
    fontFamily: "Karla"
  }
});

export default Room;
