import { Image, StyleSheet, Text, View } from "react-native";
import { WORKERS } from "../../store/serviceworkers";
import { USERS } from "../../store/users";

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
      <Text style={styles.text}>{user.first_name} {user.last_name}</Text>
      <Text>{user.location}</Text>
    </View>
  );
}

export default WorkerDetailScreen;

const styles = StyleSheet.create({
  image: {
    height: 210,
    width: 210,
    borderRadius: 100,
  },
  rootContainer: {
    alignItems: 'center'
  }
})