import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {CheckBox} from 'react-native-elements';

const data = [
  '1, Từ 1 - 38 tuổi',
  '2, Từ 31 - 48 tuổi',
  '3, Từ 41 - 58 tuổi',
  '4, Từ 51 - 68 tuổi',
  '5, Trên 68 tuổi',
];

const Servey: React.FC = () => {
  const navigation = useNavigation();

  const [answers, setAnswers] = useState<Array<string>>([]);

  const handleCheckBox = (arrange: number) => {
    if (!answers.includes(data[arrange])) {
      setAnswers([...answers, data[arrange]]);
    } else {
      setAnswers(answers.filter(item => item !== data[arrange]));
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center'}}>Câu 1:</Text>
      <Text>Độ tuổi của quý khách:</Text>
      <View>
        {data.map((item, index) => {
          return (
            <CheckBox
              key={index}
              title={item}
              checked={answers.includes(item)}
              onPress={() => handleCheckBox(index)}
            />
          );
        })}
      </View>
      <View>
        <Button
          title="Prev"
          color="yellow"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Next"
          disabled={answers.length !== 0 ? false : true}
          color="green"
        />
      </View>
    </View>
  );
};

export default Servey;
