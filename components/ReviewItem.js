import { Image, StyleSheet, Text, View } from "react-native";
import { USERS } from "../store/users";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/styles";

function ReviewItem( {review} ) {
  const reviewer = USERS.find((user) => {
    return user.id === review.from;
  })
  const rate = parseFloat(review.rating).toFixed(1);
  return (
  <View style={styles.rootContainer}>
    <View style={styles.upperContainer}>
      <View>
        <Image source={{uri: reviewer.image}} style={styles.image}/>
      </View>
      <View>
        <Text style={styles.nameContainer}>{reviewer.first_name} {reviewer.last_name}</Text>
        <View style={styles.ratingContainer}>
        <Ionicons name="star" color={"gold"} size={20}/>
        <Text>{rate}</Text>
        </View>
      </View>
    </View>
    <View>
      <Text numberOfLines={5} style={styles.notesArea}>{review.notes}</Text>
    </View>
  </View>
  );
}

export default ReviewItem;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  upperContainer: {
    flexDirection: 'row'
  }, 
  ratingContainer: {
    flexDirection: 'row'
  },
  notesArea: {
    marginTop: 4,
    padding: 4,
    height: 50,
    backgroundColor: Colors.dark200,
    borderRadius: 8
  },
  rootContainer: {
    backgroundColor: Colors.secondary300,
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
  },
  nameContainer: {
    fontSize: 18
  }
})