import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface IButton {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: IButton) => {
  const pressed = useSharedValue(false);
  const style = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#888' : '#444',
    transform: [{scale: withTiming(pressed.value ? 1.2 : 1)}],
  }));

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
      runOnJS(onPress)();
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={tap}>
        <Animated.View style={[style, styles.box]}>
          <Text style={styles.title}>{title}</Text>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#eee',
  },
  box: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: 'violet',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#eee',
  },
});

export default Button;
