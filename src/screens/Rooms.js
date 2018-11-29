import React from "react";
import { StyleSheet, Text, FlatList, Image, View } from "react-native";
import axios from "axios";
import StarRating from "react-native-star-rating";
import { ScrollView } from "react-native-gesture-handler";

class Rooms extends React.Component {
  state = {
    rooms: []
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.screenTitle}>Logements Airbnb à Paris</Text>
        <FlatList
          data={this.state.rooms}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image
                source={{ uri: item.photos[0] }}
                style={styles.flatImage}
              />
              <View style={styles.priceTag}>
                <Text style={styles.price}>{item.price}€</Text>
              </View>

              <View style={styles.flatInformations}>
                <View style={styles.flatTitleReview}>
                  <Text numberOfLines={1} style={styles.title}>
                    {item.title}
                  </Text>
                  <View style={styles.starRating}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      starSize={20}
                      fullStarColor="#FFB400"
                      emptyStarColor="#FFB400"
                      rating={item.ratingValue}
                    />
                    <Text style={styles.rating}>
                      {item.reviews} <Text>reviews</Text>
                    </Text>
                  </View>
                </View>
                <Image
                  source={{ uri: item.user.account.photos[0] }}
                  style={styles.avatarImage}
                />
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }

  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        if (response.data) {
          this.setState({ rooms: response.data.rooms });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 25
  },

  container: {
    flex: 1
  },

  screenTitle: {
    fontSize: 25,
    color: "#262626",
    fontWeight: "bold",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 320,
    marginTop: 40
  },

  flatImage: {
    height: 200,
    width: 320,
    flex: 1,
    position: "relative",
    borderRadius: 4
  },

  priceTag: {
    position: "absolute",
    top: 150,
    left: 15,
    backgroundColor: "rgba(255,255,255, 0.9)",
    borderRadius: 4
  },

  price: {
    fontWeight: "bold",
    color: "#262626",
    padding: 10
  },

  title: {
    fontSize: 16,
    color: "#262626",
    fontWeight: "600",
    marginBottom: 5
  },

  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 20
  },

  flatInformations: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20
  },

  flatTitleReview: {
    flex: 3
  },

  starRating: {
    flexDirection: "row",
    alignItems: "center"
  },

  rating: {
    color: "#C2C2C2",
    paddingLeft: 10
  }
});

export default Rooms;
