import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { USERS } from "../store/users";
import { Colors } from "../constants/styles";
import { WORKERS } from "../store/serviceworkers";

function WorkerView({workerId, onClick}) {
  const worker = WORKERS.find((workerItem) => {
    return workerItem.id === workerId;
  })
  const user = USERS.find((userItem) => {
    return userItem.id === worker.userId;
  })

  return (
    <View style={styles.btnOuterContainer}>
      <Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.btnInnerContainer] : styles.btnInnerContainer} onPress={onClick} android_ripple={{ color: Colors.accent200 }}>
        <View style={styles.mainContainer}>
          <Image style={styles.profileImage} source={{ uri: user.image }}></Image>
          <View style={styles.textArea}>
            <Text style={styles.buttonText}>{user.first_name} {user.last_name}</Text>
            <Text style={styles.buttonText}>{worker.rate}</Text>
            <Text style={styles.buttonText}>{user.location}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default WorkerView;

const styles = StyleSheet.create({
  btnOuterContainer: {
      margin: 4,
      borderRadius: 18,
      overflow: 'hidden',
      borderWidth: 3
  },
  btnInnerContainer: {
      backgroundColor: Colors.primary800,
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
  },
  buttonText: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'urbanist',
      fontSize: 18
  },
  pressed: {
    borderRadius: 18,
      opacity: 0.75,
  }, 
  logoArea: {
    flex: 3
  },
  textArea: {
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 75,
  },
  mainContainer: {
    flexDirection: 'row'
  }
});