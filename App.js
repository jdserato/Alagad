import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{margin:50, borderWidth:2, borderColor:'red', padding:16}}>Whttaops</Text>
      </View>
      
      <Text>Team ALAGAD</Text>
      <StatusBar style="auto" />
      <View style={styles.bot}>
        <Button title='Tap Me'/>
      </View>
    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cf7c20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bot: {
    flex: 1,
    backgroundColor: '#5f7420',
    alignSelf: 'baseline',
    alignContent:'space-evenly'
  },
});
