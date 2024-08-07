import { ScrollView, StyleSheet, View } from "react-native";
import Input from "../components/Input";
import { useRef } from "react";
import BlackButton from "../components/BlackButton";

function LoginScreen( {route, navigation} ) {
  function loginHandler () {
    navigation.navigate("CustomerMainScreen");
  }

  const ref_input2 = useRef();

  return (
    <View style={styles.rootContainer}>
    <ScrollView style={styles.inputsContainer}>
      <Input label={"Email Address"} nextInp={ref_input2} textInputConfig={{
        keyboardType: 'email',
      }}/>
      <Input label={"Password"} textInputConfig={{
        secureTextEntry: true,
        ref: ref_input2,
      }}/>
    </ScrollView>
    <View style={styles.buttonsContainer}>
    <BlackButton onClick={loginHandler}>LOG IN</BlackButton>
    </View>
     </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flex: .1,
    marginHorizontal: 16
  }
});