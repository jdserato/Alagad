import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BookingsPrevious from "./BookingsPrevious";
import BookingsCurrent from "./BookingsCurrent";

function BookingsScreenLayout() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Previous" component={BookingsPrevious}/>
      <Tab.Screen name="Current" component={BookingsCurrent}/>
    </Tab.Navigator>
  );
}

export default BookingsScreenLayout;