import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomerLanding from './Landing';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from '../ChatsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from '../SettingScreen';
import SpecificServicersScreen from './SpecificServicersScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import WorkerDetailScreen from './WorkerDetailScreen';
import BookingScreen from './BookingScreen';

const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Customer';
  switch (routeName) {
    case 'Customer':
      return 'Booking';
    case 'Chats':
      return 'Messages';
    case 'Account':
      return 'My account';
    default:
      return routeName;
  }
}

function BookServiceNav() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='CustomerLanding' component={CustomerLanding}/>
      <Stack.Screen name='SpecificServicersScreen' component={SpecificServicersScreen}/>
      <Stack.Screen name='WorkerDetailScreen' component={WorkerDetailScreen}/>
      <Stack.Screen name='BookingScreen' component={BookingScreen}/>
    </Stack.Navigator>
  )
}

function BottomTabsNav() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerShown: false
    }}>
      <BottomTabs.Screen name='Customer' component={BookServiceNav} options={({route}) => ({
        headerTitle: getHeaderTitle(route),
        title: "Home",
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" color={color} size={size}/>
        )
      })}/>
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
      <Drawer.Screen name="Main" component={BottomTabsNav} options={({route}) => ({
        headerTitle: getHeaderTitle(route),
      })}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default CustomerMainScreen;