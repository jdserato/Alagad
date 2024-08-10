import { Image, StyleSheet, Text, View } from "react-native";
import { WORKERS } from "../../store/serviceworkers";
import { USERS } from "../../store/users";
import BlackButton from "../../components/BlackButton";
import WhiteButton from "../../components/WhiteButton";

function WorkerDetailScreen( {route} ) {
  const id = route.params.id;
  const worker = WORKERS.find((worker) => {
    return worker.id === id;
  })
  const user = USERS.find((user) => {
    return worker.userId === user.id;
  })
  return (
    <View style={styles.rootContainer}>
      <Image source={{uri: user.image}} style={styles.image}/>
      <Text style={styles.textName}>{user.first_name} {user.last_name}</Text>
      <Text>{user.location}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <BlackButton>BOOK NOW</BlackButton>
        </View>
        <View style={styles.buttonContainer}>
        <WhiteButton>MESSAGE</WhiteButton>
        </View>
      </View>
    </View>
  );
}

export default WorkerDetailScreen;

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
  },
  buttonContainer: {
    marginVertical: 4
  },
  textName: {
    fontSize: 32,
    fontFamily: 'urbanist'
  }
})