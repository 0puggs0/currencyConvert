import {createStackNavigator} from '@react-navigation/stack';
import {CurrencyScreen} from '../../screens/CurrencyScreen';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../../screens/HomeScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CurrencyScreen"
          component={CurrencyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
