import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScrollableContainer = ({ children, style }: ScrollableContainerProps) => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          ...style
        }}
      >
        {children}
      </SafeAreaView>
    </ScrollView>
  );
};

export default ScrollableContainer;