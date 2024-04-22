/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
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
import SectionListDemo from './src/SectionList';
import FlexDemo from './src/FlexDemo';
import LoginRegister from './src/LoginRegister';
import FlexListDemo from './src/FlexListDemo';

export const orangeColor = '#E74218';

function App(): React.JSX.Element {
  const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <LoginRegister /> */}
      <FlexListDemo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
