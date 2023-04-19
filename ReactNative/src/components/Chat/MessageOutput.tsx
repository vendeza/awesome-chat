import {observer} from 'mobx-react';
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface IProps {
  timer: {secondsPassed: number; reset: () => void; increase: () => void};
}

const MessageOutput = observer(({timer}: IProps) => (
  <View style={styles.container}>
    <Text>MessageOutpu View</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MessageOutput;
