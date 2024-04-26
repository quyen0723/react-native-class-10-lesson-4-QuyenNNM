import React, {useEffect} from 'react';
import {View, Text, useColorScheme, StyleSheet} from 'react-native';

const Section: React.FC<{
  title: string;
  description: string;
}> = ({children, title, description}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black';
  useEffect(() => {
    console.log('appear');
    return () => {
      console.log('disappear');
    };
  }, []);
  return (
    <View>
      <Text style={styles.title1}>{title}</Text>
      <Text style={styles.title2}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title1: {
    margin: 10,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  title2: {
    margin: 10,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Section;
