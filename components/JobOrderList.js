import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BOOKINGS, BookingsContext, getBookings, setBookings } from "../store/bookings";
import JobOrderItem from "./JobOrderItem";
import { useContext, useEffect, useState } from "react";
import { fetchBookings } from "../util/http";
import { useSelector } from "react-redux";
import { USERS } from "../store/users";

function JobOrderList({context, nextScreen}) {
  // const [fetchedBookings, setFetchedBookings] = useState([]);
  const bookingsCtx = useContext(BookingsContext);
  const userId = useSelector((state) => state.loggedInUser.id);
  const activeUser = USERS.find((user) => user.id === userId);

  useEffect(() => {
    async function getBookings() {
      const bookings = await fetchBookings();
      // setFetchedBookings(bookings);
      bookingsCtx.setBookings(bookings);
    }

    getBookings();
  }, []);
  
  const bookingsList = bookingsCtx.bookings.filter((booking) => {
    if (activeUser.id != booking.clientId) {
      return false;
    }
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
    console.log(itemData.item);
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