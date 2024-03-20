import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import {orangeColor} from '../App';

function LoginRegister(): React.JSX.Element {
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

  const sigup = (label: string) => {
    Alert.alert(label);
  };
  const login = (label: string) => {
    Alert.alert(label);
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
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
              key={index}
              label={input.title}
              placeholder={input.placeholder}
              isEmail={input.isEmail}
            />
          ))}
          <CustomButton
            label={'SignUp'}
            colorCode={orangeColor}
            onPress={(val: string) => sigup(val)}
          />
          <CustomButton
            label={'Login'}
            colorCode={'#F8B550'}
            onPress={(val: string) => login(val)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LoginRegister;
