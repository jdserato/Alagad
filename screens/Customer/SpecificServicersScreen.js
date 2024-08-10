import { FlatList, StyleSheet, Text, View } from "react-native";
import { SERVICES } from "../../store/services";
import { WORKERS } from "../../store/serviceworkers";
import WorkerView from "../../components/WorkerView";


function SpecificServicersScreen( {route, navigation} ) {
  function renderWorker(itemData) {
    function workerDetail() {
      navigation.navigate('WorkerDetailScreen', {id: itemData.item.id})
    }
    return <WorkerView workerId={itemData.item.id} onClick={workerDetail}/>
  }

  const servId = route.params.servId;
  const service = SERVICES.find((serviceItem) => {
    return serviceItem.id === servId;
  })
  const workersList = WORKERS.filter((workerItem) => {
    return workerItem.serviceId === servId;
  })

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text>{service.name} - {workersList.length} workers</Text>
      </View>
      <FlatList data={workersList} keyExtractor={(item) => item.id} renderItem={renderWorker}/>
    </View>
  );
}

export default SpecificServicersScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center'
  }
});