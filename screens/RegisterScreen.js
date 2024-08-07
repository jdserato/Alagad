import { ScrollView, StyleSheet, View } from "react-native";
import Input from "../components/Input";
import { useRef } from "react";
import BlackButton from "../components/BlackButton";

function RegisterScreen() {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  return (
    <View style={styles.rootContainer}>
    <ScrollView style={styles.inputsContainer}>
      <Input label={"First Name"} nextInp={ref_input2} textInputConfig={{
        autoFocus: true,
      }}/>
      <Input label={"Last Name"} nextInp={ref_input3} textInputConfig={{
        ref: ref_input2,
      }}/>
      <Input label={"Email Address"} nextInp={ref_input4} textInputConfig={{
        ref: ref_input3,
        keyboardType: 'email',
      }}/>
      <Input label={"Password"} nextInp={ref_input5} textInputConfig={{
        secureTextEntry: true,
        ref: ref_input4,
      }}/>
      <Input label={"Confirm Password"} nextInp={ref_input6} textInputConfig={{
        secureTextEntry: true,
        ref: ref_input5,
      }}/>
      <Input label={"Location"} nextInp={null} textInputConfig={{
        ref: ref_input6,
      }}/>
    </ScrollView>
    <View style={styles.buttonsContainer}>
    <BlackButton>NEXT</BlackButton>
    </View>
     </View>
  )
}

export default RegisterScreen;

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