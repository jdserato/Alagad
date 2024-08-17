import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BOOKINGS } from "../store/bookings";
import JobOrderItem from "./JobOrderItem";

function JobOrderList() {
  function renderJobOrder(itemData) {
    return (
      // <Text></Text>
      <JobOrderItem booking={itemData.item}/>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={BOOKINGS} renderItem={renderJobOrder} keyExtractor={(item) => item.id}/>
    </View>
  );
  
}

export default JobOrderList;

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
})