import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple="#defefe" onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        borderWidth: 1,
        margin: 4,
        borderRadius: 7,
        borderColor: '#c2c2c2',
        backgroundColor: 'red',
    },
    goalText: {
        padding: 8,
        fontSize: 14,
    },
    pressedItem: {
        opacity: 0.5
    },
});