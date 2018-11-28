import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default class SignUp extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    errorAuth: false,
    username: "",
    name: "",
    description: ""
  };
  static navigationOptions = {
    title: "Sign Up",
    headerStyle: {
      backgroundColor: "#FE5B5E"
    },
    headerTintColor: "#fff"
  };

  handleSubmit = () => {
    axios
      .post("https://airbnb-api.now.sh/api/user/sign_up", {
        email: this.state.email,
        account: {
          password: this.state.password,
          username: this.state.username,
          name: this.state.name,
          description: this.state.description
        }
      })
      .then(response => {});
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset="0"
          enabled
        >
          <Text numberOflines="2" style={styles.accountTitle}>
            Create your account
          </Text>
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            blurOnSubmit={true}
            style={styles.input}
            onChangeText={email => this.setState({ email })}
            placeholder={"exemple@email.com"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.email}
          />

          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            autoCapitalize="none"
            blurOnSubmit={true}
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            placeholder={"Password"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.password}
          />
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            autoCapitalize="none"
            blurOnSubmit={true}
            style={styles.input}
            onChangeText={username => this.setState({ username })}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.username}
          />
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            autoCapitalize="none"
            blurOnSubmit={true}
            style={styles.input}
            onChangeText={name => this.setState({ name })}
            placeholder={"Name"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.usernamename}
          />
          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            autoCapitalize="none"
            blurOnSubmit={true}
            style={styles.input}
            onChangeText={description => this.setState({ description })}
            placeholder={"Enter a description"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.description}
          />
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigate("Rooms")}
          >
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#FE5B5E"
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  accountTitle: {
    fontSize: 35,
    color: "white",
    fontWeight: "600"
  },

  input: {
    height: 50,
    width: 280,
    borderColor: "white",
    borderBottomWidth: 1,
    color: "white",
    fontSize: 15,
    marginTop: 20
  },

  errorAuth: {
    color: "white",
    marginTop: 30,
    fontWeight: "600"
  },

  signInButton: {
    backgroundColor: "white",
    width: 150,
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },

  textSignUp: {
    color: "#FE5B5E",
    fontSize: 20
  }
});
