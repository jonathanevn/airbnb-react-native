import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

class Map extends React.Component {
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.props.latitude,
            longitude: this.props.longitude
          }}
          title={this.props.title}
          description={this.props.description}
          image={require("../images/location-pointer.png")}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default Map;
