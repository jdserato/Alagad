import { Button, Image, StyleSheet, Text, View } from "react-native";
import { WORKERS } from "../../store/serviceworkers";
import { USERS } from "../../store/users";
import {BOOKINGS } from "../../store/bookings";
import BlackButton from "../../components/BlackButton";

function JobDetailsScreen( {route} ) {
  return (
    <JobDetailsGeneric route={route}>
      <View style={styles.buttonContainer}>
          <Button title="CONFIRM BOOKING"></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="REJECT BOOKING"></Button>
        </View>
    </JobDetailsGeneric>
  );
}

export default JobDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  rootContainer: {
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '80%',
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 4,
    flex: 1
  },
  textName: {
    fontSize: 32,
    fontFamily: 'urbanist'
  }
})