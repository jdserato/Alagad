import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals(currentGoals => [...goals, { text: enteredGoalText, id: Math.random().toString() }]);
  };

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'orange'} onPress={startAddGoalHandler}/>
      {modalVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} onEndGoal={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        <FlatList keyExtractor={(item, index) => item.id} data={goals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
        }}>
        </FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },

});
