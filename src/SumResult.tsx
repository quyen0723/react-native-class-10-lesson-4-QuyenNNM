import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const SumResult: React.FC<{sum: number; decreaseAmount: () => void}> = ({
  sum,
  decreaseAmount,
}) => {
  return (
    <View style={{margin: 20}}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: 'red',
          height: 50,
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={decreaseAmount}>
        <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
          Click to decrease
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 48, textAlign: 'center', color: 'black'}}>
        {sum}
      </Text>
    </View>
  );
};

export default SumResult;
