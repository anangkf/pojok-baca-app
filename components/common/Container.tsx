import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children, style }: ContainerProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        ...style
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;