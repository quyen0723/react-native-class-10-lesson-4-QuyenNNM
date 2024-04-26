import React, {ReactNode, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const IncreaseDecrease: React.FC = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseCount}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decreaseCount}>
        <Text style={styles.buttonText}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IncreaseDecrease;
