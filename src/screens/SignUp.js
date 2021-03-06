import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default class SignUp extends React.Component {
  state = {
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
    errorInput: "",
    username: "",
    usernameError: false,
    name: "",
    nameError: false,
    description: "",
    descriptionError: false
  };
  static navigationOptions = {
    title: "Sign Up",
    headerStyle: {
      backgroundColor: "#FE5B5E"
    },
    headerTintColor: "#fff"
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
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
      .then(response => {
        if (this.state.email === "") {
          this.setState({ emailError: true });
        }
        if (this.state.password === "") {
          this.setState({ passwordError: true });
        }

        if (this.state.username === "") {
          this.setState({ usernameError: true });
        }

        if (this.state.name === "") {
          this.setState({ nameError: true });
        }

        if (this.state.description === "") {
          this.setState({ descriptionError: true });
        } else {
          navigate("Profile", { name: response.data.account.username });
        }
      })
      .catch(error => {
        this.setState({ errorInput: true });
      });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={100}
          enabled
        >
          <Text numberOflines="2" style={styles.accountTitle}>
            Create{"\n"}your account
          </Text>
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            blurOnSubmit={true}
            style={
              this.state.emailError === true ? styles.inputError : styles.input
            }
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
            style={
              this.state.passwordError === true
                ? styles.inputError
                : styles.input
            }
            onChangeText={password => this.setState({ password })}
            placeholder={"Password"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.password}
          />
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            blurOnSubmit={true}
            style={
              this.state.usernameError === true
                ? styles.inputError
                : styles.input
            }
            onChangeText={username => this.setState({ username })}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.username}
          />
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            blurOnSubmit={true}
            style={
              this.state.nameError === true ? styles.inputError : styles.input
            }
            onChangeText={name => this.setState({ name })}
            placeholder={"Name"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.name}
          />
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            blurOnSubmit={true}
            onChangeText={description => this.setState({ description })}
            placeholder={"Enter a description"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            value={this.state.description}
            style={
              this.state.descriptionError === true
                ? styles.inputError
                : styles.inputDescription
            }
          />
          <Text style={styles.errorAuth}>
            {this.state.errorInput == true
              ? "Merci de remplir tous les champs"
              : ""}
          </Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => this.handleSubmit()}
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
    fontWeight: "600",
    justifyContent: "flex-start",
    width: "70%"
  },

  input: {
    height: 50,
    width: "70%",
    borderColor: "white",
    borderBottomWidth: 1,
    color: "white",
    fontSize: 15,
    marginTop: 20
  },

  inputError: {
    height: 50,
    width: "70%",
    borderColor: "red",
    borderBottomWidth: 10,
    color: "red",
    fontSize: 15,
    marginTop: 20
  },

  inputDescription: {
    height: 90,
    width: "70%",
    borderColor: "white",
    color: "white",
    fontSize: 15,
    marginTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 0
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
