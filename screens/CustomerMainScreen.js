import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import CustomerLanding from './CustomerLanding';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from './ChatsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from './SettingScreen';

const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BookServiceNav() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='CustomerLanding' component={CustomerLanding}/>
    </Stack.Navigator>
  )
}

function BottomTabsNav() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerShown: false
    }}>
      <BottomTabs.Screen name='Customer' component={BookServiceNav} options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" color={color} size={size}/>
        )
      }}/>
      <BottomTabs.Screen name='Chats' component={ChatsScreen} options={{
        title: "Chat",
        tabBarIcon: ({color, size}) => (
          <Ionicons name="chatbox" color={color} size={size}/>
        )
      }}/>
    </BottomTabs.Navigator>
  );
}

function CustomerMainScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={BottomTabsNav} options={{
        title: "Home"
      }}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default CustomerMainScreen;