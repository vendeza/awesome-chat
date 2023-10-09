import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../components/Chat';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
