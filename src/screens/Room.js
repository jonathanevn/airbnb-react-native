import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";
import RoomCard from "../components/RoomCard";

class Room extends React.Component {
  state = {
    rooms: {}
  };

  render() {
    return (
      <View style={styles.container}>
        <RoomCard />
        <Text>{this.state.rooms.description}</Text>
        {/*     <Image style={styles.flatImage} source={{ uri: rooms.photos[0] }} /> */}
        {/*   <Image
          style={styles.avatarImage}
          source={{ uri: rooms.user.account.photos[0] }}
        /> */}

        {/* <Text>{rooms.user.account.username}</Text> */}
      </View>
    );
  }

  componentDidMount() {
    const id = this.props.navigation.state.params.id;
    axios
      .get("https://airbnb-api.now.sh/api/room/" + id)
      .then(response => {
        if (response.data) {
          this.setState({
            rooms: response.data
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }

  /*   flatImage: {
    height: 200,
    width: 320,
    flex: 1,
    position: "relative",
    borderRadius: 4
  },

  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 20
  } */
});

export default Room;
