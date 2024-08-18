import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BOOKINGS } from "../store/bookings";
import JobOrderItem from "./JobOrderItem";

function JobOrderList({context, nextScreen}) {
  console.log(context);
  const bookingsList = BOOKINGS.filter((booking) => {
    switch (context) {
      case 'Previous':
        return booking.status >= 2; // cancelled or completed
      case 'Current':
        return booking.status === 1;
      case 'Pending':
        return booking.status === 0;
    }
  });
  console.log(bookingsList.length)
  function renderJobOrder(itemData) {
    return (
      // <Text></Text>
      <JobOrderItem booking={itemData.item} nextScreen={nextScreen} context={context}/>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={bookingsList} renderItem={renderJobOrder} keyExtractor={(item) => item.id}/>
    </View>
  );
  
}

export default JobOrderList;

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
})