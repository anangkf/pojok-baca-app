import { Dimensions, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonLoader from '../common/SkeletonLoader';
import { Rating } from 'react-native-rating-element';
import { Divider } from 'react-native-paper';

const BookDataLoader = ({ isLoading }: BookDataLoaderProps) => {
  const screenWidth = Dimensions.get('screen').width;

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <ScrollView
        style={{
          paddingHorizontal: 8,
          paddingTop: 14,
          // paddingBottom: 40,
        }}
      >
        <View>
          {/* thumbnail */}
          <SkeletonLoader visible={!isLoading} height={270} width={180} style={{ borderRadius: 12, alignSelf: 'center' }} />
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 8,
              gap: 3
            }}
          >
            {/* title, author, rating */}
            <SkeletonLoader visible={!isLoading} width={270} />
            <SkeletonLoader visible={!isLoading} />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }} >
              <Rating rated={0} size={18} readonly />
              <SkeletonLoader visible={!isLoading} width={26} />
            </View>
            {/* button */}
            <View
              style={{
                flexDirection: 'row',
                gap: 14,
                alignItems: 'center'
              }}
            >
              <SkeletonLoader visible={!isLoading} height={42} style={{ borderRadius: 12 }} />
              <SkeletonLoader visible={!isLoading} height={42} width={42} style={{ borderRadius: 12 }} />
            </View>
          </View>

          <Divider bold={true} style={{ width: screenWidth }} />

          <View style={{ padding: 4, gap: 6, paddingBottom: 28 }} >
            {/* chip */}
            <View style={{ gap: 2 }}>
              <SkeletonLoader visible={!isLoading}/>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 4, gap: 10 }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                  <SkeletonLoader key={idx} visible={!isLoading} width={120} height={32} style={{ borderRadius: 16 }} />
                ))}
              </View>
            </View>
            {/* deskripsi */}
            <View style={{ gap: 2 }}>
              <SkeletonLoader visible={!isLoading} />
              <View style={{ gap: 2 }}>
                {Array.from({ length: 10 }).map((_, idx) => (
                  <SkeletonLoader key={idx} visible={!isLoading} width={screenWidth}/>
                ))}
              </View>
              <SkeletonLoader visible={!isLoading} />
            </View>

            <Divider bold={true} style={{ width: screenWidth }} />

            {/* detail */}
            <View style={{ width: screenWidth, gap: 2 }}>
              <SkeletonLoader visible={!isLoading} />
              <View style={{ flexDirection: 'row', gap: 2 }} >
                <SkeletonLoader visible={!isLoading} width={90} />
                <SkeletonLoader visible={!isLoading} width={screenWidth - 110} />
              </View>
              <View style={{ flexDirection: 'row', gap: 2 }} >
                <SkeletonLoader visible={!isLoading} width={90} />
                <SkeletonLoader visible={!isLoading} width={screenWidth - 110} />
              </View>
              <View style={{ flexDirection: 'row', gap: 2 }} >
                <SkeletonLoader visible={!isLoading} width={90} />
                <SkeletonLoader visible={!isLoading} width={screenWidth - 110} />
              </View>
              <View style={{ flexDirection: 'row', gap: 2 }} >
                <SkeletonLoader visible={!isLoading} width={90} />
                <SkeletonLoader visible={!isLoading} width={screenWidth - 110} />
              </View>
              <View style={{ flexDirection: 'row', gap: 2 }} >
                <SkeletonLoader visible={!isLoading} width={90} />
                <SkeletonLoader visible={!isLoading} width={screenWidth - 110} />
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDataLoader;