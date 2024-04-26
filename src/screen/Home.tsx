import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../CustomButton';

const Home: React.FC = () => {
  const navigation = useNavigation();
  console.log(navigation);

  const logout = () => {
    // user.setUser({
    //   name: '',
    //   password: '',
    // })
  };
  return (
    <View>
      <Text>This is home</Text>
      <Text onPress={() => navigation.navigate('User')}>Move to User</Text>
      <CustomButton label={'Logout'} colorCode={'red'} onPress={logout} />
    </View>
  );
};

export default Home;

// import React from 'react';
// import {Text, View} from 'react-native';

// const Home: React.FC<{navigation: any}> = ({navigation}) => {
//   console.log(navigation);
//   return (
//     <View>
//       <Text>This is home</Text>
//       <Text onPress={() => navigation.navigate('User')}>Move to User</Text>
//     </View>
//   );
// };

// export default Home;
