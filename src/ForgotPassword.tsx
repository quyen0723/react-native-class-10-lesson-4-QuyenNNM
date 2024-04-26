import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';

const ForgotPassword: React.FC = ({children}: {children?: ReactNode}) => {
  //children là prop
  return (
    <View
      style={{
        height: 68,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text>Forgot password</Text> */}
      {children}
    </View>
  );
};

export default ForgotPassword;
