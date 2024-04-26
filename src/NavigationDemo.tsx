import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import Home from './screen/Home';
import User from './screen/User';

const Stack = createNativeStackNavigator();

const NavigationDemo = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default NavigationDemo;
