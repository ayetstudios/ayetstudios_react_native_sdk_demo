import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Offerwall from './pages/Offerwall';
import Home from './pages/Home';

const Stack = createStackNavigator();

const App = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="Offerwall"
            options={{headerShown: false}}
            component={Offerwall}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
