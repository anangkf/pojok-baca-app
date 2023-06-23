import { Dimensions, View } from 'react-native';
import SkeletonLoader from '../common/SkeletonLoader';

const BookCardLoader = ({ isLoading, horizontal }: BookCardLoaderProps) => {
  const { width: screenWidth } = Dimensions.get('window');
  const marginRight = 10;
  const width = horizontal ? 150 : (screenWidth / 2) - marginRight;

  return (
    <View
      style={{
        width,
        marginVertical: 6,
        marginRight,
        paddingBottom: 4
      }}
    >
      {/* image skeleton */}
      <SkeletonLoader
        visible={!isLoading}
        width={width}
        height={width * 1.5}
      />
      {/* title skeleton */}
      <View
        style={{
          marginVertical: 16,
          alignSelf: 'center',
          gap: 1
        }}
      >
        <SkeletonLoader
          visible={!isLoading}
          width={horizontal ? 130 : width * 13/15}
        />
        <SkeletonLoader
          visible={!isLoading}
          width={horizontal ? 130 : width * 13/15}
        />
      </View>
      {/* book detail skeleton */}
      <View
        style={{
          flexDirection: 'row',
          gap: 2,
          justifyContent: 'space-between',
          paddingHorizontal: 8,
          paddingBottom: 20
        }}
      >
        <SkeletonLoader
          visible={!isLoading}
          width={width * 2/3}
        />
        <SkeletonLoader
          visible={!isLoading}
          width={width / 5}
        />
      </View>
    </View>
  );
};

export default BookCardLoader;