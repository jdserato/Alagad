import { StyleSheet, Text, View } from "react-native";
import AllServicesList from "../../components/AllServicesList";
import { useSelector } from "react-redux";
import { USERS } from "../../store/users";

function LandingScreen({navigation}) {
  const userId = useSelector((state) => state.loggedInUser.id);
  const activeUser = USERS.find((user) => {
    return user.id === userId;
  });
  console.log(activeUser,'is null?', !activeUser);
  
  if (!activeUser) {
    navigation.replace("HomeScreen");
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Welcome {activeUser.first_name}</Text>
      <Text style={styles.text}>What are you looking for today?</Text>
      </View>
      <AllServicesList />
    </View>
  );
}

export default LandingScreen;

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