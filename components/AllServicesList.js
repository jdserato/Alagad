import { FlatList, StyleSheet, View } from "react-native";
import { SERVICES } from "../store/services";
import LogoButton from "./LogoButton";
import { useNavigation } from "@react-navigation/native";

function AllServicesList() {
  const navigation = useNavigation();
  function renderServices(itemData) {
    function serviceHandler() {
      navigation.navigate("SpecificServicersScreen", {servId: itemData.item.id} );
    }
    return (
      <LogoButton logo={itemData.item.logo} text={itemData.item.name} logoSize={60} onClick={serviceHandler}/>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} contentContainerStyle={styles.listContainer} data={SERVICES} renderItem={renderServices} keyExtractor={(item) => item.id} numColumns={3}/>
    </View>
  );
}

export default AllServicesList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  listContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  }
})