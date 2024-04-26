import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

const CheckPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  let a = 0;
  const validatePhoneNumber = (text: string) => {
    // Kiểm tra số điện thoại có đúng định dạng không
    const regex = /^[0-9]{10}$/; // Số điện thoại gồm 10 chữ số
    if (!regex.test(text)) {
      setError('Số điện thoại không hợp lệ');
      return false;
    }
    a = 1;
    setError('');
    return true;
  };

  const handleContinue = (text: string) => {
    const prevPhoneNumber = phoneNumber;
    const newPhoneNumber = phoneNumber.replace(/ /g, ''); // Remove spaces before validation

    if (phoneNumberFocused && prevPhoneNumber !== newPhoneNumber) {
      validatePhoneNumber(newPhoneNumber);
    }
    if (!validatePhoneNumber(newPhoneNumber)) {
      // Nếu số điện thoại không hợp lệ, hiển thị lỗi
      return Alert.alert('Thông báo', 'Số điện thoại không hợp lệ');
    }

    // Nếu số điện thoại hợp lệ, hiển thị thông báo số điện thoại hợp lệ
    Alert.alert('Thông báo', 'Số điện thoại hợp lệ');
  };

  const formatPhoneNumber = (text: string) => {
    // Tự động format lại số điện thoại khi nhập
    // Ví dụ: (123) 456-7890
    // Đây là một cách đơn giản, bạn có thể thay đổi theo ý muốn
    return text.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  };

  const handleBlur = () => {
    // Check phone number only when focus is lost and number has changed
    const prevPhoneNumber = phoneNumber;
    const newPhoneNumber = phoneNumber.replace(/ /g, ''); // Remove spaces before validation

    if (phoneNumberFocused && prevPhoneNumber !== newPhoneNumber) {
      validatePhoneNumber(newPhoneNumber);
    }
  };

  const handleChangeText = (text: any) => {
    const formattedPhoneNumber = formatPhoneNumber(text);
    setPhoneNumber(formattedPhoneNumber);
    validatePhoneNumber(text); // Sử dụng tham số text thay vì phoneNumber
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text style={styles.header}>Đăng nhập</Text>
          <View
            style={{
              borderBottomColor: error ? 'red' : 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 50,
            }}
          />
          <Text style={styles.title}>Nhập số điện thoại</Text>
          <Text style={styles.text}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing
            Pro
          </Text>
          <TextInput
            style={[styles.input, {borderBottomColor: error ? 'red' : 'gray'}]}
            placeholder="Nhập số điện thoại của bạn"
            value={phoneNumber}
            onChangeText={handleChangeText}
            onBlur={handleBlur}
            onFocus={() => setPhoneNumberFocused(true)}
          />
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
          <TouchableOpacity
            style={{
              height: 68,
              borderRadius: 10,
              marginVertical: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleContinue}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1, // Độ dày của đường gạch dưới
    borderBottomColor: 'gray', // Màu sắc của đường gạch dưới
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default CheckPhone;
