import { View } from 'react-native';
import SkeletonLoader from '../common/SkeletonLoader';

const BookCardLoader = ({ isLoading }: BookCardLoaderProps) => {
  return (
    <View
      style={{
        width: 150,
        marginRight: 8,
        paddingBottom: 4
      }}
    >
      <SkeletonLoader
        visible={!isLoading}
        width={150}
        height={200}
      />
      <View
        style={{
          marginVertical: 16,
          alignSelf: 'center',
          gap: 1
        }}
      >
        <SkeletonLoader
          visible={!isLoading}
          width={130}

        />
        <SkeletonLoader
          visible={!isLoading}
          width={130}
        />
      </View>
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
          width={100}
        />
        <SkeletonLoader
          visible={!isLoading}
          width={30}
        />
      </View>
    </View>
  );
};

export default BookCardLoader;