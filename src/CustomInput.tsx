import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {orangeColor} from '../App';

type CustomInputProps = {
  label: string;
  placeholder: string;
  isEmail?: boolean;
  changeText: (value: string) => void;
  value?: any;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  isEmail,
  changeText,
  value,
}) => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={{marginVertical: 5}}>
      <Text style={{color: orangeColor, fontWeight: 'bold'}}>{label}</Text>
      <TextInput
        keyboardType={'numeric'} // sử dugj cho Oclock
        placeholder={placeholder}
        onChangeText={changeText}
        maxLength={2} //chỉ sử dụng cho Oclock
        value={value}
        style={{
          borderWidth: 0.5,
          borderColor: '#D0D0D0',
          padding: 10,
          borderRadius: 5,
        }}
      />
      <Text>{value}</Text>
      {isEmail && (
        <Text
          style={{
            textAlign: 'right',
            color: orangeColor,
            textDecorationLine: 'underline',
          }}>
          Register with phone number
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
