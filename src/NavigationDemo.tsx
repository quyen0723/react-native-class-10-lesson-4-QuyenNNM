import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserContext} from './context/UserContext';
import Servey from './screen/Servey';
import Login from './screen/Login';

const Stack = createNativeStackNavigator();

const NavigationDemo = () => {
  const {user} = useContext(UserContext);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          {user.name.length == 0 ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen name="Home" component={Servey} />
              {/* Add other screens here */}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default NavigationDemo;
