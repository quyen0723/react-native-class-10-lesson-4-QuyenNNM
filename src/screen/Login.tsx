import React, {useContext, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, View} from 'react-native';
import CustomButton from '../CustomButton';
import {orangeColor} from '../../App';
import CustomInput from '../CustomInput';
import {UserContext} from '../context/UserContext';
import {useNavigation} from '@react-navigation/native';

function Login(): React.JSX.Element {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {setUser} = useContext(UserContext);
  const navigation = useNavigation();

  const InputList = [
    {
      title: 'Name',
      placeholder: 'John Doe',
      changeText: setName,
      value: name,
    },
    {
      title: 'Password',
      placeholder: '*****',
      changeText: setPassword,
      value: password,
    },
  ];
  console.log(setUser);
  const login = () => {
    setUser({name, password});
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: orangeColor,
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 15,
            }}>
            Login
          </Text>
          <View style={{margin: 20}}>
            {InputList.map((input, index) => (
              <CustomInput
                value={input.value}
                changeText={text => input.changeText(text)}
                key={index}
                label={input.title}
                placeholder={input.placeholder}
              />
            ))}
            <CustomButton
              label={'Login'}
              colorCode={'#F8B550'}
              onPress={login}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
