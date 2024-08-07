import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import LogoButton from "../components/LogoButton";


function ChoiceScreen( {route, navigation} ) {
  function customerRegHandler() {
    navigation.navigate("RegisterScreen");
  }
  return (
    <View style={styles.rootContainer}>
      <Text>Enter the system as a...</Text>
      <View style={styles.buttonsContainer}>
      <LogoButton logo="person" text="CUSTOMER" onClick={customerRegHandler}/>
      <LogoButton logo="hammer" text="SERVICE PROVIDER"/>
      </View>
    </View>
  );
}

export default ChoiceScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  }, 
  rootContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})