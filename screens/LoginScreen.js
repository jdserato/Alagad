import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import { useRef, useState } from "react";
import BlackButton from "../components/BlackButton";
import { useNavigation } from "@react-navigation/native";
import { logInUser, USERS } from "../store/users";
import { useDispatch } from "react-redux";

function LoginScreen( {route, navigation} ) {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue
      }
    })
  }

  function loginHandler () {
    const user = USERS.find((user) => {
      if (user.email === inputValues.email && user.password === inputValues.password) {
        return user;
      }
    });
    if (user) {
      dispatch(logInUser({id: user.id}));
      navigation.navigate("CustomerMainScreen");
    } else {
      Alert.alert("Invalid username/password", 
        "Could not log you in. Please check your credentials or try again later.");
    }
  }

  const ref_input2 = useRef();

  return (
    <View style={styles.rootContainer}>
    <ScrollView style={styles.inputsContainer}>
      <Input label={"Email Address"} nextInp={ref_input2} textInputConfig={{
        keyboardType: 'email',
        onChangeText: inputChangedHandler.bind(this, 'email')
      }}/>
      <Input label={"Password"} textInputConfig={{
        secureTextEntry: true,
        ref: ref_input2,
        onChangeText: inputChangedHandler.bind(this, 'password')
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
  },
  invalidText: {
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center',
  }
});