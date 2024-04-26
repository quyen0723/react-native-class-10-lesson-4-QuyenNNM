import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import CustomInput from './CustomInput';
import _ from 'lodash';

const Oclock = () => {
  console.log(_.shuffle([1, 2, 3, 4, 5]));
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {}, 5000);
  }, []);

  useEffect(() => {
    if (hour > 24) {
      setDay(day + 1);
      setHour(hour - 24);
    }
  }, [hour]);

  useEffect(() => {
    if (minute > 60) {
      setHour(hour + 1);
      setMinute(minute - 60);
    }
  }, [minute]);

  useEffect(() => {
    if (second > 60) {
      setMinute(minute + 1);
      setSecond(second - 60);
    }
  }, [second]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <CustomInput
            changeText={(val: string) => {
              const dayInput = +val;
              setDay(dayInput);
            }}
            label={'day'}
            value={day}
            placeholder={'day'}
          />
          <CustomInput
            changeText={(val: string) => {
              const hourInput = +val;
              setHour(hourInput);
            }}
            label={'hour'}
            placeholder={'hour'}
            value={hour}
          />
          <CustomInput
            changeText={(val: string) => {
              const minuteInput = +val;
              setMinute(minuteInput);
            }}
            label={'minute'}
            placeholder={'minute'}
            value={minute}
          />
          <CustomInput
            changeText={(val: string) => {
              const secondInput = +val;
              setSecond(secondInput);
              //   if (secondInput > 60) {
              //     setMinute(minute + 1);
              //     setSecond(secondInput - 60);
              //   } else {
              //     setSecond(secondInput);
              //   }
              console.log(secondInput);
            }}
            label={'second'}
            placeholder={'second'}
            value={second}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1, // Độ dày của đường gạch dưới
    borderBottomColor: 'gray', // Màu sắc của đường gạch dưới
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default Oclock;
