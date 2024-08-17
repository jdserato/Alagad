import { Button, Image, StyleSheet, Text, View } from "react-native";
import { WORKERS } from "../../store/serviceworkers";
import { USERS } from "../../store/users";
import {BOOKINGS } from "../../store/bookings";
import BlackButton from "../../components/BlackButton";

function JobDetailsScreen( {route} ) {
  const booking = route.params.booking;
  const worker = route.params.worker;
  const user = route.params.user;
  // const worker = WORKERS.find((worker) => {
  //   return worker.id === id;
  // })
  // const user = USERS.find((user) => {
  //   return worker.userId === user.id;
  // })
  // const booking = BOOKINGS.find((booking) => {
  //   return booking.workerId === id;
  // })

  return (
    <View style={styles.rootContainer}>
      <Image source={{uri: user.image}} style={styles.image}/>
      <Text style={styles.textName}>{user.first_name} {user.last_name}</Text>
      <View style={styles.rootContainer}>
        <Text>Date/s: {booking.date}</Text>
        <Text>Time: {booking.time}</Text>
        <Text>Location: {user.location}</Text>
        <Text>Downpayment: </Text>
        <Text>More Details: </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="CONFIRM BOOKING"></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="REJECT BOOKING"></Button>
        </View>
      </View>
      <View >
        <BlackButton>MESSAGE</BlackButton>
        </View>
    </View>
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