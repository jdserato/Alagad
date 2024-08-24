import React, {useState, useEffect, useCallback} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';;
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRoute, useNavigation  } from '@react-navigation/native';


const MessageScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Image source={{ uri: user.userImg }} style={styles.userImage} />
          <Text style={styles.userName}>{user.userName}</Text>
        </View>
      ),
    });

    setMessages([
      {
        _id: 1,
        text: 'Hello user',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: user.userName,
          avatar: user.userImg,
        },
      },
      {
        _id: 2,
        text: 'Hello service worker',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'You',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dr_Prash_Ladva.jpg/640px-Dr_Prash_Ladva.jpg?t=${Date.now()}',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialIcons
            name="send"
            style={{marginBottom: 5, marginRight: 5}}
            size={30}
            color="#3A54FE"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#3A54FE',
          },
          left: {
            backgroundColor: '#E8F0FE'
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#1A1A40',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333333' />
    );
  };
    
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderSend={renderSend}
      alwaysShowSend={false}
      showAvatarForEveryMessage={true}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MessageScreen;
