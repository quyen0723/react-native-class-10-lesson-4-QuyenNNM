import {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _, {shuffle} from 'lodash';
import Section from './Section';

type ItemData = {
  id: string;
  title: string;
  image: any; // Change the type to 'any'
  price: any;
};

const initiaData: ItemData[] = [
  {
    image: require('./assets/images/image1.jpg'),
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'acer PC',
    price: 100,
  },
  {
    image: require('./assets/images/image2.jpg'),
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'asus screen',
    price: 200,
  },
  {
    image: require('./assets/images/image3.jpg'),
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'logitech keyboard',
    price: 300,
  },
  {
    image: require('./assets/images/image4.jpg'),
    id: '59694a0f-3da1-471f-bd96-145571e29d72',
    title: 'logitech mouse',
    price: 400,
  },
  {
    image: require('./assets/images/image5.png'),
    id: '57694a0f-3da1-471f-bd96-145571e29d72',
    title: 'hp ram',
    price: 500,
  },
];

function TimeUseffectNav(): React.JSX.Element {
  const [data, setData] = useState(initiaData);
  const [iShow, setShow] = useState(true);
  const [keyword, setKeyword] = useState<string>('');

  //   useEffect(() => {
  //     setInterval(() => {
  //       setData(shuffle(data));
  //     }, 50);
  //   }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setData(
        _.shuffle(
          data.filter(item => item.title.includes(keyword.toLowerCase())),
        ),
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [data.length, keyword]);

  const Item = ({item}: {item: ItemData}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        Alert.alert(
          'Thông báo',
          'Giá của sản phẩm: $' +
            item.price +
            '\nTên của sản phẩm: ' +
            item.title,
        )
      }>
      <Image source={item.image} style={styles.img}></Image>
      <Text style={{marginTop: 30}}>{item.title}</Text>
      <Text style={{marginTop: 30, color: 'red', fontSize: 16}}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}: {item: ItemData}) => <Item item={item} />;

  const filterItemName = () => {
    setData(data.filter(item => item.title.includes(keyword.toLowerCase())));
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <TouchableOpacity
        onPress={() => setShow(!iShow)}
        style={{backgroundColor: 'yellow', width: 50, height: 50, margin: 10}}
      />
      {iShow && <Section title={'title'} description={'description'} />}
      <View>
        <TextInput
          onChangeText={text => setKeyword(text)}
          style={{borderWidth: 1, borderColor: 'gray', height: 50, margin: 10}}
          placeholder="Tìm kiếm"
        />
        <TouchableOpacity
          onPress={filterItemName}
          style={{
            backgroundColor: 'gray',
            borderRadius: 10,
            width: 100,
            height: 40,
            marginLeft: 10,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Tìm kiếm
          </Text>
        </TouchableOpacity>
        {/* <Text onPress={filterItemName}>Search</Text> */}
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={{marginTop: 28}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    width: 170,
    height: 300,
    alignItems: 'center',
    borderWidth: 0.5,
    color: 'black',
    margin: 10,
    borderRadius: 8,
  },
  img: {
    width: 120,
    height: 120,
  },
});

export default TimeUseffectNav;
