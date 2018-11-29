import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

class Room extends React.Component {
  state = {
    room: {}
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.room.title}</Text>
        <Text>{this.state.room.description}</Text>
      </View>
    );
  }

  componentDidMount() {
    const { navigation } = this.props;
    const itemId = this.props.navigation.state.params.id;
    console.log("itemId", itemId);
    axios
      .get("https://airbnb-api.now.sh/api/room/" + itemId)
      .then(response => {
        console.log("response.data", response.data);
        if (response.data) {
          console.log("response.data", response.data);
          this.setState({
            room: response.data
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
});

export default Room;
