/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./src/screens/MainScreen";
import ProfileScreen from "./src/screens/Profile";
import SignUp from "./src/screens/SignUp";
import Rooms from "./src/screens/Rooms";
import Room from "./src/screens/Room";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const App = createStackNavigator({
  Main: { screen: MainScreen, navigationOptions: { header: null } },
  Profile: { screen: ProfileScreen },
  SignUp: { screen: SignUp },
  Rooms: { screen: Rooms, navigationOptions: { header: null } },
  Room: { screen: Room }
});

export default createAppContainer(App);
