import { StyleSheet, Text, View } from "react-native";
import JobOrderList from "../../components/JobOrderList";

function BookingsPending() {
  return (
  <View style={styles.container}>
    <View style={styles.textContainer}>
    <Text style={styles.text}>Your Pending Bookings</Text>
    </View>
    <JobOrderList context={"Pending"} nextScreen={"CustomerBookingDetails"}/>
  </View>
  );
}

export default BookingsPending;

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