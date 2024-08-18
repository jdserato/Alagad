import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BookingsPrevious from "./BookingsPrevious";
import BookingsCurrent from "./BookingsCurrent";
import BookingsPending from "./BookingsPending";

function BookingsScreenLayout() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Current">
      <Tab.Screen name="Previous" component={BookingsPrevious}/>
      <Tab.Screen name="Current" component={BookingsCurrent}/>
      <Tab.Screen name="Pending" component={BookingsPending}/>
    </Tab.Navigator>
  );
}

export default BookingsScreenLayout;