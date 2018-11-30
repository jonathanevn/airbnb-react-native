import React from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import RoomCard from "../components/RoomCard";

class Rooms extends React.Component {
  state = {
    rooms: [],
    city: ""
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.screenTitle}>
          Logements Airbnb à {this.state.city.name}
        </Text>
        <FlatList
          data={this.state.rooms}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                this.props.navigation.navigate("Room", item);
              }}
            >
              <RoomCard
                photo={item.photos[0]}
                title={item.title}
                price={item.price}
                ratingValue={item.ratingValue}
                reviews={item.reviews}
                userAvatar={item.user.account.photos[0]}
              />
            </TouchableOpacity>
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
          this.setState({
            rooms: response.data.rooms,
            city: response.data.city
          });
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
  }
});

export default Rooms;
