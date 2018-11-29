import React from "react";
import axios from "axios";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default class MainScreen extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    errorAuth: false
  };

  handleLogIn = () => {
    const { navigate } = this.props.navigation;
    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (response.data.token) {
          navigate("Profile", { name: response.data.account.username });
        }
      })
      .catch(error => {
        this.setState({
          errorAuth: true
        });
      });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.logoTitleView}>
          <Image source={require("../images/logo.png")} />
          <Text style={styles.welcome}>Welcome</Text>
        </View>

        <TextInput
          keyboardType="default"
          autoCapitalize="none"
          blurOnSubmit={true}
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          placeholder={"example@email.com"}
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
        <Text style={styles.forgottenPassword}>Forgot your password?</Text>
        <Text style={styles.errorAuth}>
          {this.state.errorAuth === true
            ? "Email ou mot de passe invalide"
            : null}
        </Text>
        <TouchableOpacity
          style={styles.CTAbutton}
          onPress={() => this.handleLogIn()}
        >
          <Text style={styles.textLogIn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigate("SignUp")}
        >
          <Text style={styles.textSignUp}>Sign In</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FE5B5E",
    justifyContent: "center",
    alignItems: "center"
  },

  logoTitleView: {
    justifyContent: "center",
    alignItems: "center"
  },

  welcome: {
    fontSize: 35,
    color: "white",
    fontWeight: "600",
    marginTop: 30
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

  forgottenPassword: {
    fontSize: 10,
    marginTop: 10,
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "right",
    width: 280
  },

  CTAbutton: {
    backgroundColor: "white",
    width: 150,
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  textLogIn: {
    color: "#FE5B5E",
    fontSize: 20
  },

  errorAuth: {
    color: "white",
    marginTop: 30,
    fontWeight: "600"
  },

  signInButton: {
    borderColor: "white",
    borderWidth: 1,
    width: 150,
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  textSignUp: {
    color: "white",
    fontSize: 20
  }
});