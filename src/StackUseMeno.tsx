import {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _, {shuffle} from 'lodash';
import Section from './Section';
import NumberButton from './NumberButton';
import React from 'react';
import SumResult from './SumResult';

function StackUseMeno(): React.JSX.Element {
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(1);
  const [amount3, setAmount3] = useState<number>(1);
  console.log(amount1);

  const increaseAmount1 = useCallback(() => {
    setAmount1(amount1 + 1);
  }, [amount1]);

  const increaseAmount2 = useCallback(() => {
    setAmount2(amount2 + 1);
  }, [amount2]);

  const increaseAmount3 = useCallback(() => {
    setAmount3(amount3 + 1);
  }, [amount3]);

  const decrease = () => {};

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <NumberButton amount={amount1} increaseAmount={increaseAmount1} />
      <NumberButton amount={amount2} increaseAmount={increaseAmount2} />
      <NumberButton amount={amount3} increaseAmount={increaseAmount3} />
      <SumResult sum={amount1 + amount2} decreaseAmount={decrease} />
      <SumResult sum={amount2 + amount3} decreaseAmount={decrease} />
      <SumResult sum={amount1 + amount2 + amount3} decreaseAmount={decrease} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    width: 170,
    height: 300,
    alignItems: 'center',
    borderWidth: 0.5,
    color: 'black',
    margin: 10,
    borderRadius: 8,
  },
  img: {
    width: 120,
    height: 120,
  },
});

export default StackUseMeno;
