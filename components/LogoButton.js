import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "../constants/styles";

function LogoButton({ logo, text, onClick }) {
  return <View style={styles.btnOuterContainer}>
  <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.btnInnerContainer] :styles.btnInnerContainer } onPress={onClick} android_ripple={{ color: Colors.accent200 }}>
    <View style={styles.logoArea}>

    <Ionicons name={logo} size={80} color={"white"}/>
    </View>
    <View style={styles.textArea}>

    <Text style={styles.buttonText}>{text}</Text>
    </View>
  </Pressable>
</View>
}

export default LogoButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
      margin: 4,
      borderRadius: 18,
      overflow: 'hidden',
  },
  btnInnerContainer: {
      backgroundColor: Colors.primary800,
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      width: 150,
      elevation: 2,
      borderRadius: 18,
  },
  buttonText: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'urbanist',
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
  }
});