import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [goals, setGoals] = useState([]);
  
  function addGoalHandler(enteredGoalText) {
    setGoals(currentGoals => [...goals, {text: enteredGoalText, id: Math.random().toString()}]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        <FlatList keyExtractor={(item, index) => { return item.id; }} data={goals} renderItem={itemData => {
          return <GoalItem text={ itemData.item.text} />;
        }}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5, 
  },
  
});
