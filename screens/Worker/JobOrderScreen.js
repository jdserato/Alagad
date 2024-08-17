import { StyleSheet, Text, View } from "react-native";
import JobOrderList from "../../components/JobOrderList";

function JobOrderScreen( {route, navigation} ) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Pending Job</Text>
      </View>
      <JobOrderList />
    </View>
  );
}

export default JobOrderScreen;

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