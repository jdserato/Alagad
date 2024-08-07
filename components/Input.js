import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/styles';

function Input({ label, nextInp, textInputConfig }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <TextInput 
        style={styles.input} 
        placeholder={label} 
        blurOnSubmit={false}
        onSubmitEditing={() => {{if (nextInp) { nextInp.current.focus() }}}}
        enterKeyHint='next' 
        {...textInputConfig}/>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,  
    marginVertical: 4,
    padding: 8
  }, 
  label :{
    fontSize: 12,
    color: Colors.primary500,
    flex: 2
    // marginBottom: 4
  },
  input: {
    backgroundColor: Colors.secondary300,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 6,
    flex: 7,
    fontSize: 18,
    fontFamily: 'urbanist-med',
    borderWidth: 2
  }
})