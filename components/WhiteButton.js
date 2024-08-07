import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";

function WhiteButton({ children, onClick }) {
    function pressHandler() {
        onClick();
    }

    return (
        <View style={styles.btnOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.btnInnerContainer] :styles.btnInnerContainer } onPress={onClick} android_ripple={{ color: Colors.accent200 }}>
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default WhiteButton;

const styles = StyleSheet.create({
    btnOuterContainer: {
        margin: 0,
        borderRadius: 4,
        overflow: 'hidden',
        borderWidth: 3,
        shadowOffset: 16,
    },
    btnInnerContainer: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'urbanist',
    },
    pressed: {
        opacity: 0.75,
    }
});