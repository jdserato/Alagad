import { LinearGradient } from 'expo-linear-gradient';
import { Button, ImageBackground, Image, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/styles';
import WhiteButton from '../components/WhiteButton';
import { useNavigation } from '@react-navigation/native';
import BlackButton from '../components/BlackButton';


function HomeScreen() {
  const navigation = useNavigation();
  function registerHandler() {
    navigation.navigate("ChoiceScreen");
  }
  
  return (
    <View style={styles.rootScreen}>
      <LinearGradient colors={[Colors.secondary500, Colors.accent200]} style={styles.rootContainer}>
        <ImageBackground source={require('../assets/images/lander.jpg')}
        resizeMethod='cover' style={styles.backImg} imageStyle={styles.bgImage}>
          <View style={styles.imageContainer}>
            <Image source={require("../assets/logo-alagad.png")} style={styles.image}/>
          </View>
      </ImageBackground>
      </LinearGradient>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <WhiteButton>LOG IN</WhiteButton>
        </View>
        <View style={styles.buttonContainer}>
          <BlackButton onClick={registerHandler}>REGISTER</BlackButton>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 12,
  },
  rootScreen: {
    flex: 1,
  },
  backImg: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.2,
  },
  buttonsContainer: {
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  loginButton: {
    color: 'black'
  }, 
  imageContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  image: {
    resizeMode: 'contain',
    width: 300,
    alignItems: 'center'
  }
});