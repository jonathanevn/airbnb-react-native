import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import PropTypes from "prop-types";
import StarRating from "react-native-star-rating";

class RoomCard extends React.Component {
  static propTypes = {
    photo: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    ratingValue: PropTypes.number,
    userAvatar: PropTypes.string,
    reviews: PropTypes.number,
    itemId: PropTypes.string,
    hidePrice: PropTypes.bool
  };

  render() {
    return (
      <View>
        <Image source={{ uri: this.props.photo }} style={styles.flatImage} />
        <View style={styles.priceTag}>
          {this.props.hidePrice === true ? null : (
            <Text style={styles.price}>{this.props.price}€</Text>
          )}
        </View>
        <View style={styles.flatInformations}>
          <View style={styles.flatTitleReview}>
            <Text numberOfLines={1} style={styles.title}>
              {this.props.title}
            </Text>
            <View style={styles.starRating}>
              <StarRating
                disabled={false}
                maxStars={5}
                starSize={13}
                fullStarColor="#FE5B5E"
                emptyStarColor="#FE5B5E"
                rating={this.props.ratingValue}
              />
              <Text style={styles.rating}>
                {this.props.reviews} <Text>reviews</Text>
              </Text>
            </View>
          </View>
          <Image
            source={{ uri: this.props.userAvatar }}
            style={styles.avatarImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatImage: {
    height: 200,
    width: 320,
    flex: 1,
    position: "relative",
    borderRadius: 4
  },

  priceTag: {
    position: "absolute",
    top: 150,
    left: 15,
    backgroundColor: "rgba(255,255,255, 0.9)",
    borderRadius: 4
  },

  price: {
    fontWeight: "bold",
    color: "#262626",
    padding: 10
  },

  title: {
    fontSize: 18,
    color: "#262626",
    fontWeight: "600",
    marginBottom: 5
  },

  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 20
  },

  flatInformations: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20
  },

  flatTitleReview: {
    flex: 3
  },

  starRating: {
    flexDirection: "row",
    alignItems: "center"
  },

  rating: {
    color: "#C2C2C2",
    paddingLeft: 10
  }
});

export default RoomCard;
