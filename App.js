import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ImageBackground, SafeAreaView } from 'react-native';
import { COLORS } from './constants/styles';
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoiceScreen from './screens/ChoiceScreen';
import RegisterCustomerScreen from './screens/RegisterCustomerScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'urbanist': require('./assets/fonts/Urbanist_900Black.ttf'),
          'urbanist-med': require('./assets/fonts/Urbanist_500Medium.ttf'),
        })
      } catch (e) {
        console.warn(e);
      } finally {
          setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
    <StatusBar style='auto'/>
    <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="ChoiceScreen" component={ChoiceScreen} options={{
            title: ""
          }}/>
          <Stack.Screen name="RegisterCustomerScreen" component={RegisterCustomerScreen} options={{
            title: "Register"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.35,
  }
});