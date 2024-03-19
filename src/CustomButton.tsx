import React from 'react';
import {Text, View} from 'react-native';

type ButtomType = {
  label: string;
  colorCode: string;
};

const CustomButton: React.FC<ButtomType> = ({label, colorCode}) => {
  return (
    <View
      style={{
        height: 68,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: colorCode,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{label}</Text>
    </View>
  );
};

export default CustomButton;
