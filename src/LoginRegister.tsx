import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import {orangeColor} from '../App';
import ForgotPassword from './ForgotPassword';
import {useState} from 'react';

function LoginRegister(): React.JSX.Element {
  const regex = new RegExp('^\\+?\\d{9,11}$');
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retypePassword, setRetypePassword] = useState<string>('');

  const InputList = [
    {
      title: 'Name',
      placeholder: 'Jonh Doe',
      changeText: setName,
      value: name,
    },
    {
      title: 'Mail',
      placeholder: 'abc@gmail.com',
      isEmail: true,
      changeText: setMail,
      value: mail,
    },
    {
      title: 'Password',
      placeholder: '*****',
      changeText: setPassword,
      value: password,
    },
    {
      title: 'RetypePassword',
      placeholder: '*****',
      changeText: setRetypePassword,
      value: retypePassword,
    },
  ];

  const sigup = (label: string) => {
    Alert.alert(label);
  };
  const login = (label: string) => {
    Alert.alert(`Xin chao ${name}`);
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
            }}>
            Join Active eCommerce
          </Text>
          <View style={{margin: 20}}>
            {InputList.map((input, index) => (
              <CustomInput
                value={input.value}
                changeText={text => input.changeText(text)}
                key={index}
                label={input.title}
                placeholder={input.placeholder}
                isEmail={input.isEmail}
              />
            ))}
            <CustomButton
              label={'SignUp'}
              colorCode={orangeColor}
              onPress={sigup}
            />
            <CustomButton
              label={'Login'}
              colorCode={'#F8B550'}
              onPress={login}
            />
            <ForgotPassword>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Reset password
              </Text>
            </ForgotPassword>
            <ForgotPassword>
              <TouchableOpacity
                onPress={() => {
                  setName('');
                  setMail('');
                  setPassword('');
                  setRetypePassword('');
                }}>
                <Text style={{color: 'green', fontWeight: 'bold'}}>
                  Reset form
                </Text>
              </TouchableOpacity>
            </ForgotPassword>
            <Text>tên: {name}</Text>
            <Text>mail: {mail}</Text>
            <Text>password: {password}</Text>
            <Text>retypePassword: {retypePassword}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default LoginRegister;
