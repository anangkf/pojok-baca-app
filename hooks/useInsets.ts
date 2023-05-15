import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useInsets = (): InsetsAreaType => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  return { paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right };
};

export default useInsets;