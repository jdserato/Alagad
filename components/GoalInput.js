import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        props.onEndGoal();
    }

    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput placeholder='Enter goal' value={enteredGoalText} style={styles.textInput} onChangeText={goalInputHandler} />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onEndGoal} color={"#f31282"}/>
                    </View>
                    <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandler} color={"#5e0af0"}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',

    },
    button: {
        width: '30%',
        marginHorizontal: 8, 
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});

export default GoalInput;