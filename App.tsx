/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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
import PropCallback from './src/PropCallback';
import IncreaseDecrease from './src/IncreaseDecrease';
import CheckPhone from './src/CheckPhone';
import Oclock from './src/Oclock';
import TimeUseffectNav from './src/TimeUseffectNav';
import StackUseMeno from './src/StackUseMeno';
import NavigationDemo from './src/NavigationDemo';

export const orangeColor = '#E74218';
const data = [
  {key: '1', backgroundColor: 'green', text: 'GREEN'},
  {key: '2', backgroundColor: 'blue', text: 'BLUE'},
  {key: '3', backgroundColor: 'brown', text: 'BROWN'},
  {key: '4', backgroundColor: 'yellow', text: 'YELLOW'},
  {key: '5', backgroundColor: 'red', text: 'RED'},
  {key: '6', backgroundColor: 'black', text: 'BLACK'},
];

//const [color, setColor] = useState<string>('');
function App(): React.JSX.Element {
  const {width} = Dimensions.get('window');

  const [backgroundColor, setBackgroundColor] = useState(orangeColor);

  const handlePressPropCallback = (color: string) => {
    setBackgroundColor(color); // Cập nhật màu nền hiện tại
  };

  const renderItem = ({
    item,
  }: {
    item: {key: string; backgroundColor: string; text: string};
  }) => (
    <PropCallback
      backgroundColor={item.backgroundColor}
      onPress={() => handlePressPropCallback(item.backgroundColor)}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{item.text}</Text>
    </PropCallback>
  );

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}}> //đổi màu màn hình khi click
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <LoginRegister /> */}

      {/* <FlexListDemo /> */}

      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={{flexGrow: 1}}
        // Bạn có thể thêm các props khác của FlatList tại đây nếu cần
      /> */}

      {/* <IncreaseDecrease /> */}
      {/* <CheckPhone /> */}
      {/* <Oclock /> */}

      {/* <TimeUseffectNav /> */}

      {/* <StackUseMeno /> */}

      <NavigationDemo />
    </SafeAreaView>
  );
}

//const styles = StyleSheet.create({});

export default App;
