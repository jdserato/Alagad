import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/styles";
import { USERS } from "../store/users";
import { WORKERS } from "../store/serviceworkers";
import { useNavigation } from "@react-navigation/native";

function JobOrderItem({booking, nextScreen, context}) {
  const navigation = useNavigation();
  const worker = WORKERS.find((worker) => {
    return worker.id === booking.workerId; //to change to workerId -> user -> userId
  })
  const user = USERS.find((user) => {
    return user.id === worker.userId; //to change to workerId -> user -> userId
  })

  console.log(user);
  console.log(booking);
  
  function bookingHandler() {
    console.log(nextScreen);
    navigation.navigate(nextScreen, {booking: booking, worker: worker, user: user, context: context});
  }

  return (
    <View style={styles.btnOuterContainer}>
        {<Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.btnInnerContainer] : styles.btnInnerContainer} onPress={bookingHandler} android_ripple={{ color: Colors.accent200 }}>
          <View style={styles.rootContainer}>
            <View style={styles.upperContainer}>
              <View>
                <Image source={{uri: user.image}} style={styles.image}/>
              </View>
              <View>
                <Text style={styles.nameContainer}>{user.first_name} {user.last_name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" color={"gold"} size={20}/>
                  {/* <Text>{rate}</Text> */}
                </View>
                <Text style={styles.nameContainer}>{booking.date} {booking.time}</Text>
                <Text style={styles.nameContainer}>{user.location}</Text>
              </View>
            </View>
            {/* <View>
              <Text numberOfLines={5} style={styles.notesArea}>{review.notes}</Text>
            </View> */}
          </View>
        </Pressable>}
      </View>
  );
  
}

export default JobOrderItem;

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