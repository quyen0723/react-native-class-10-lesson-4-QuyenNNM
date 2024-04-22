import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ItemData = {
  id: string;
  title: string;
  image: any; // Change the type to 'any'
};

const DATA: ItemData[] = [
  {
    image: require('./assets/images/image1.jpg'),
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    image: require('./assets/images/image2.jpg'),
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    image: require('./assets/images/image3.jpg'),
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    image: require('./assets/images/image4.jpg'),
    id: '59694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lala Item',
  },
  {
    image: require('./assets/images/image5.png'),
    id: '57694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Huhu Item',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  itemWidth: number;
};

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  itemWidth,
}: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, {backgroundColor, width: itemWidth}]}>
    <Image source={item.image} style={styles.image} />
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

function FlexListDemo(): React.JSX.Element {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        itemWidth={itemWidth}
      />
    );
  };
  const numColumns = 2;
  const marginHorizontal = 21;
  const itemWidth =
    (Dimensions.get('window').width - marginHorizontal * (numColumns + 1)) /
    numColumns;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default FlexListDemo;
