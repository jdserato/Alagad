import { useDispatch } from "react-redux";
import BlackButton from "../../components/BlackButton";
import JobDetailsGeneric from "../Worker/JobDetailsGeneric";
import JobDetailsScreen from "../Worker/JobDetailsScreen";
import { Alert, Button, StyleSheet, View } from "react-native";
import { changeBookingStatus } from "../../store/bookings";

function BookingCustomerDetailsScreen( {route} ) {
  const dispatch = useDispatch();
  const booking = route.params.booking;
  console.log(booking.status);
  
  function completeJobHandler() {
    Alert.alert("Confirm Completed", "Click \"CONFIRM\" to complete transaction", [
      {
        text: "CONFIRM",
        style: 'default',
        onPress: () => {
          dispatch(changeBookingStatus({id: booking.id, newstatus: 4}));
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