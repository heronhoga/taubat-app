import { StackActions } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace("Home"));
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/TAUBAT.png")}
        />
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center", 
  },
  tinyLogo: {
    width: 225, 
    height: 258, 
  },
});
