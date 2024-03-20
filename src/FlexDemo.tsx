import {Dimensions, SafeAreaView, View} from 'react-native';

function FlexDemo(): React.JSX.Element {
  const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <View
          style={{backgroundColor: 'red', height: 120, width: 120, margin: 10}}
        />
        <View
          style={{backgroundColor: 'red', height: 120, width: 120, margin: 10}}
        />
        <View
          style={{backgroundColor: 'red', height: 120, width: 120, margin: 10}}
        />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'red',
              height: 120,
              width: 120,
              margin: 10,
            }}
          />
          <View
            style={{
              backgroundColor: 'red',
              height: 120,
              width: 120,
              margin: 10,
            }}
          />
          <View
            style={{
              backgroundColor: 'red',
              height: 120,
              width: 120,
              margin: 10,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FlexDemo;
