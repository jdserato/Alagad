import { Image, StyleSheet, Text, View } from "react-native";
import { WORKERS } from "../../store/serviceworkers";
import { USERS } from "../../store/users";
import BlackButton from "../../components/BlackButton";
import WhiteButton from "../../components/WhiteButton";
import RatingsList from "../../components/ReviewsList";
import { REVIEWS } from "../../store/reviews";

function WorkerDetailScreen( {route, navigation} ) {
  const id = route.params.id;
  navigation.setOptions({title: route.params.title});
  const worker = WORKERS.find((worker) => {
    return worker.id === id;
  })
  const user = USERS.find((user) => {
    return worker.userId === user.id;
  })
  const my_reviews = REVIEWS.filter((review) => {
    return review.to === user.id;
  })
  function bookNowHandler() {
    navigation.navigate("BookingScreen", {worker: worker});
  }
  return (
    <View style={styles.rootContainer}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.textName}>{user.first_name} {user.last_name}</Text>
      <Text>{user.location}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <BlackButton onClick={bookNowHandler}>BOOK NOW</BlackButton>
        </View>
        <View style={styles.buttonContainer}>
          <WhiteButton>MESSAGE</WhiteButton>
        </View>
      </View>
      <View style={styles.reviewsContainer}>
        <View style={styles.textReviewContainer}>
        <Text>Review/s : {my_reviews.length}</Text>
        </View>
        <View style={styles.listContainer}>
          <RatingsList reviews={my_reviews} />
        </View>
      </View>
    </View>
  );
}

export default WorkerDetailScreen;

const styles = StyleSheet.create({
  image: {
    height: 125,
    width: 125,
    borderRadius: 100,
  },
  rootContainer: {
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '80%',
  },
  buttonContainer: {
    marginVertical: 4
  },
  textName: {
    fontSize: 32,
    fontFamily: 'urbanist'
  },
  reviewsContainer: {
    width: '90%',
    marginBottom: 1200
    // flex: 1
  },
  listContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  textReviewContainer: {
    alignItems: 'flex-start'
  }
})