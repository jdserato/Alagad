import { StyleSheet, Text, View } from "react-native";
import JobOrderList from "../../components/JobOrderList";

function BookingsPrevious() {
  return (
  <View style={styles.container}>
    <View style={styles.textContainer}>
    <Text style={styles.text}>Your Previous Bookings</Text>
    </View>
    <JobOrderList context={"Previous"} nextScreen={"CustomerBookingDetails"}/>
  </View>
  );
}

export default BookingsPrevious;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flex: 1,
  },
  text: {
    textAlign: 'center'
  },
  textContainer: {
    marginTop: 25
  }
});