import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const SkeletonLoader = createShimmerPlaceholder(LinearGradient);

export default SkeletonLoader;