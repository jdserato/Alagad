import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
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