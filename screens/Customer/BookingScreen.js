import { Text, View } from "react-native";
import { USERS } from "../../store/users";

function BookingScreen( {route} ) {
  const worker = route.params.worker;
  const user = USERS.find((userItem) => {
    return worker.userId === userItem.id;
  })

  return (
    <View>
      <Text>{user.first_name} {user.last_name}</Text>
    </View>
  );
}

export default BookingScreen;