import { 
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Messages = [
  {
    id: '1',
    userName: 'William McKinley',
    userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Abdelrahman_ElGendy%E2%80%94Headshot.jpg/640px-Abdelrahman_ElGendy%E2%80%94Headshot.jpg',
    messageTime: '4 mins ago',
    messageText: 'Hello, Good morning. This is a test message for the service app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dr_Prash_Ladva.jpg/640px-Dr_Prash_Ladva.jpg',
    messageTime: '2 hours ago',
    messageText: 'Good evening. This is a test message for the service app in React Native.',
  },
  {
    id: '3',
    userName: 'Felisa Nuñez',
    userImg:  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Marine_C_Cambon.jpg/640px-Marine_C_Cambon.jpg',
    messageTime: '1 day ago',
    messageText: "Abot na ko ma'am",
  },
  {
    id: '4',
    userName: 'Trinity Oliveros',
    userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Johnsson%2C_WG_editor.jpg/640px-Johnsson%2C_WG_editor.jpg',
    messageTime: '2 days ago',
    messageText: 'Good morning.',
  },
];

function ChatsScreen() {
  const navigation = useNavigation();
  return (
    <FlatList
      data={Messages}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <View style={styles.container}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Messages', { user: item })}>
            <View style={styles.userInfo}>
              <View style={styles.userImgWrapper}>
                <Image style={styles.userImg} source={{uri: item.userImg}} />
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfoText}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.postTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.messageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )} 
    />
  );
}

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  card: {
    width: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  messageText: {
    fontSize: 14,
    color: '#333333',
  },
});