import React, {ReactNode, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type PropCallbackProps = {
  children?: ReactNode;
  backgroundColor: string; // Thêm prop backgroundColor
  onPress?: () => void;
};

const PropCallback: React.FC<PropCallbackProps> = ({
  children,
  backgroundColor,
  onPress,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <TouchableOpacity
      onPress={onPress} // Bạn có thể thêm xử lý khi nhấn vào PropCallback ở đây
      style={{
        height: 68,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: isHovered ? 'transparent' : backgroundColor, // Hiển thị màu nền chỉ khi hover
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPressIn={handleMouseEnter}
      onPressOut={handleMouseLeave}>
      {children}
    </TouchableOpacity>
  );
};

export default PropCallback;
