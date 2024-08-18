import { StyleSheet, Text, View } from "react-native";
import JobOrderList from "../../components/JobOrderList";

function BookingsCurrent() {
  return (
  <View style={styles.container}>
    <View style={styles.textContainer}>
    <Text style={styles.text}>Your Current Bookings</Text>
    </View>
    <JobOrderList context={"Current"} nextScreen={"CustomerBookingDetails"}/>
  </View>
  );
}

export default BookingsCurrent;

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