import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View>
      <Text>This is home</Text>
      <Text onPress={() => navigation.navigate('User')}>Move to User</Text>
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
