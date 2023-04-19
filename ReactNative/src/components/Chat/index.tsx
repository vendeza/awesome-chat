import {observer} from 'mobx-react';
import React from 'react';
import MessageOutput from './MessageOutput';
import MessageInput from './MessageInput';
import {StyleSheet, View} from 'react-native';

const Chat = observer(() => (
  <View style={styles.container}>
    <MessageOutput />
    <MessageInput />
  </View>
));
const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',
  },
});

export default Chat;
