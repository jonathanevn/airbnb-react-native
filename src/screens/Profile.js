import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.account.username
  });
  render() {
    const { account } = this.props.navigation.state.params;
    console.log(this.props.navigation.state.params);
    return (
      <View style={styles.container}>
        <View style={styles.usernameAvatar}>
          <Image
            style={styles.avatarImage}
            source={{ uri: account.photos[0] }}
          />
          <Text style={styles.username}>{account.username}</Text>
        </View>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>{account.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    color: "#262626"
  },

  usernameAvatar: {
    justifyContent: "center",
    alignItems: "center"
  },

  username: {
    fontWeight: "700",
    fontFamily: "Karla",
    fontSize: 30,
    marginTop: 15
  },

  avatarImage: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    marginRight: 10,
    marginBottom: 5
  },

  description: {
    fontFamily: "Karla",
    color: "#262626"
  },

  label: {
    fontFamily: "Karla",
    color: "#262626",
    fontWeight: "700",
    fontSize: 18,
    marginTop: 30
  }
});
