import { StyleSheet, Text, View } from "react-native";
import AllServicesList from "../../components/AllServicesList";

function CustomerLanding() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>What are you looking for today?</Text>
      </View>
      <AllServicesList />
    </View>
  );
}

export default CustomerLanding;

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