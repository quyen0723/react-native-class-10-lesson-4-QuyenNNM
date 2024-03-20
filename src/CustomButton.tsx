import React from 'react';
import {Alert, Dimensions, Text, TouchableOpacity, View} from 'react-native';

type ButtomType = {
  label: string;
  colorCode: string;
  onPress: (val: string) => void;
};

const CustomButton: React.FC<ButtomType> = ({label, colorCode, onPress}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      style={{
        height: 68,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: colorCode,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
