import { Dimensions, Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotFound = ({ text }: NotFoundProps) => {
  const { height } = Dimensions.get('screen');

  return (
    <SafeAreaView
      style={{
        height: height / 1.25,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={require('../../assets/illustrations/business-3d-robot-assistant-sad.png')}
        />
        <Text variant='labelLarge' >{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotFound;