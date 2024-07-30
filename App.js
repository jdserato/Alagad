import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler() {
    setGoals(currentGoals => [...goals, {text: enteredGoalText, id: Math.random().toString()}]);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter goal' value={enteredGoalText} style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        <FlatList keyExtractor={(item, index) => {
          return item.id;
        }} data={goals} renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )
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
  goalItem: {
    borderWidth: 1,
    padding: 8,
    margin: 4,
    borderRadius: 7,
    borderColor: '#c2c2c2',
    backgroundColor: 'red',
  },
  goalText: {
    fontSize: 14,
  }, 
});
