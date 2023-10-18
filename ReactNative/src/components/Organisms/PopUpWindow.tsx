import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IWindow {
  isOpened: boolean;
  closeWindow: () => void;
}

const WINDOW_HEIGHT = 300;

const PopUpWindow = ({isOpened, closeWindow}: IWindow): JSX.Element => {
  const translateY = useSharedValue(WINDOW_HEIGHT);
  const containerOpacity = useSharedValue(0);
  const [viewHeight, setViewHeight] = useState(0);

  const style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(translateY.value),
      },
    ],
  }));

  const containerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(containerOpacity.value, {}, () => {
      if (containerOpacity.value === 0) {
        runOnJS(closeWindow)();
      }
    }),
  }));

  useEffect(() => {
    if (isOpened && viewHeight > 0) {
      const SCREEN_CENTER = -(viewHeight - WINDOW_HEIGHT) / 2;
      translateY.value = SCREEN_CENTER;
      containerOpacity.value = 1;
    }
  }, [isOpened, viewHeight]);

  let onClose = () => {
    translateY.value = WINDOW_HEIGHT;
    containerOpacity.value = 0;
  };

  const onLayout = (event: {nativeEvent: {layout: {height: any}}}) => {
    const {height} = event.nativeEvent.layout;
    setViewHeight(height);
  };

  if (!isOpened) return <View />;

  return (
    <Animated.View
      style={[containerStyle, styles.container]}
      onLayout={onLayout}>
      <Animated.View style={[style, styles.window]}>
        <Button title={'Ok'} onPress={onClose} />
      </Animated.View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(111,111,111, 0.5)',
    height: '100%',
  },
  window: {
    width: '70%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: WINDOW_HEIGHT,
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding: 10,
  },
  button: {
    width: '70%',
    height: 80,
    backgroundColor: '#eee',
  },
});

export default PopUpWindow;
