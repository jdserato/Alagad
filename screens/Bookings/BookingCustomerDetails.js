import BlackButton from "../../components/BlackButton";
import JobDetailsGeneric from "../Worker/JobDetailsGeneric";
import JobDetailsScreen from "../Worker/JobDetailsScreen";
import { Alert, Button, StyleSheet, View } from "react-native";
import { BookingsContext, changeBookingStatus } from "../../store/bookings";
import { useContext } from "react";
import { updateBooking } from "../../util/http";

function BookingCustomerDetailsScreen( {route, navigation } ) {
  const BookingsCtx = useContext(BookingsContext);
  const booking = route.params.booking;
  console.log(booking.status);
  
  function completeJobHandler() {
    Alert.alert("Confirm Completed", "Click \"CONFIRM\" to complete transaction", [
      {
        text: "CONFIRM",
        style: 'default',
        onPress: () => {
          BookingsCtx.updateBooking(booking.id, {status: 4});
          updateBooking(booking.id, {...booking, status: 4});
          navigation.navigate("My Booking", {screen: 'Previous'});
        }
      },
      {
        text: "Cancel",
        style: 'cancel'
      }
    ])
  }

  return (
    <JobDetailsGeneric route={route}>
      <View style={styles.buttonContainer}>
          <BlackButton bgColor={'green'} onClick={completeJobHandler}>COMPLETE JOB</BlackButton>
        </View>
        <View style={styles.buttonContainer}>
          <BlackButton bgColor={'darkred'}>CANCEL JOB</BlackButton>
        </View>
    </JobDetailsGeneric>
  );
}

export default BookingCustomerDetailsScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 4,
    flex: 1,
    marginHorizontal: 8,
  },
})