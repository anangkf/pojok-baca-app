import { View } from 'react-native';

const FlexWrapper = ({ children, style }: FlexWrapperProps) => {
  return (
    <View
      style={{
        flex: 1,
        gap: 8,
        ...style
      }}
    >
      {children}
    </View>
  );
};

export default FlexWrapper;