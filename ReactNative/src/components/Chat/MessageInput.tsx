import {observer} from 'mobx-react';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface IProps {
  timer: {secondsPassed: number; reset: () => void; increase: () => void};
}

const MessageInput = observer(({timer}: IProps) => (
  <View style={styles.container}>
    <Text>Message Input View</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#aaa',
  },
});
export default MessageInput;
