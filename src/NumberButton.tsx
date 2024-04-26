import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const NumberButton: React.FC<{amount: number; increaseAmount: () => void}> = ({
  amount,
  increaseAmount,
}) => {
  return (
    <View style={{margin: 10}}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: 'red',
          height: 50,
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={increaseAmount}>
        <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
          Click to increase
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 48, textAlign: 'center', color: 'black'}}>
        {amount}
      </Text>
    </View>
  );
};

export default React.memo(NumberButton);
