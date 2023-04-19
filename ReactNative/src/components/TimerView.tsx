import {observer} from 'mobx-react';
import {Button} from 'react-native';
import React from 'react';

interface IProps {
  timer: {secondsPassed: number; reset: () => void; increase: () => void};
}

const TimerView = observer(({timer}: IProps) => (
  <Button
    onPress={() => {
      timer.reset();
    }}
    title={`Seconds passed: ${timer.secondsPassed}`}></Button>
));

export default TimerView;
