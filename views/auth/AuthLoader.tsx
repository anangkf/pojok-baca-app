import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

function AuthLoader() {
  return (
    <SafeAreaView>
      <Text variant='bodyLarge'>Loading...</Text>
    </SafeAreaView>
  );
}

export default AuthLoader;
