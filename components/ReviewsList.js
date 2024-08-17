import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";

function RatingsList( {reviews} ) {
  function renderReview(itemData) {
    return (
      <ReviewItem review={itemData.item}/>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={reviews} renderItem={renderReview} keyExtractor={(item) => item.id}/>
    </View>
  );
}

export default RatingsList;

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})