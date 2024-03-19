/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomInput from './src/CustomInput';
import CustomButton from './src/CustomButton';

export const orangeColor = '#E74218';

function App(): React.JSX.Element {
  const InputList = [
    {
      title: 'Name',
      placeholder: 'Jonh Doe',
    },
    {
      title: 'Mail',
      placeholder: 'abc@gmail.com',
      isEmail: true,
    },
    {
      title: 'Password',
      placeholder: '*****',
    },
    {
      title: 'RetypePassword',
      placeholder: '*****',
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{marginTop: 50}}>
        <Text
          style={{
            textAlign: 'center',
            color: orangeColor,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Join Active eCommerce
        </Text>
        <View style={{margin: 20}}>
          {InputList.map((input, index) => (
            <CustomInput
              key={index}
              label={input.title}
              placeholder={input.placeholder}
              isEmail={input.isEmail}
            />
          ))}
          <CustomButton label={'SignUp'} colorCode={orangeColor} />
          <CustomButton label={'Login'} colorCode={'#F8B550'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
