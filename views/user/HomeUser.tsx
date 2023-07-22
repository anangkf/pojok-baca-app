import { useContext, useEffect } from 'react';
import { Badge, Button, IconButton, Text } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import BookList from '../../components/book/BookList';
import { RefreshControl, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonLoader from '../../components/common/SkeletonLoader';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeUserProps = {
 navigation: NativeStackScreenProps<BottomTabsParamList, 'HomeUser'>['navigation']
}
// type HomeUserProps = NativeStackScreenProps<StackParamsList, 'HomeUser'>

const HomeUser = ({ navigation }: HomeUserProps) => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  const { getAllBooks, getAccountInfo, accountInfo, isLoading, setIsLoading } = useContext(UserContext) as UserContextType;

  const fetchData = () => Promise
    .all([getAllBooks(), getAccountInfo()])
    .finally(() => setIsLoading(false));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      style={{
        paddingHorizontal: 0,
        paddingBottom: 16,
      }}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
    >
      <SafeAreaView
        style={{
          paddingHorizontal: 12
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
          <SkeletonLoader visible={!isLoading} height={20} >
            <Text variant='headlineSmall' >Hola, {accountInfo?.name}!</Text>
          </SkeletonLoader>
          <View>
            <Badge
              visible={Math.round(Math.random() * 2) === 1}
              size={6}
              style={{ position: 'absolute', right: 17, top: 14 }}
            >
              {''}
            </Badge>
            <IconButton
              icon='bell-o'
              size={20}
              onPress={() => alert('Notifications')}
            />
          </View>
        </View>
        <View
          style={{
            paddingVertical: 15
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
            <Text variant='labelLarge' style={{ fontSize: 16 }} >Best Seller</Text>
            <Button onPress={() => navigation.navigate('AllBooks', { sort: 'best-seller' })} >Lihat semua</Button>
          </View>
          <BookList />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
            <Text variant='labelLarge' style={{ fontSize: 16 }}>Mungkin Kamu suka</Text>
            <Button onPress={() => navigation.navigate('AllBooks', { sort: 'mungkin-kamu-suka' })} >Lihat semua</Button>
          </View>
          <BookList />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
            <Text variant='labelLarge' style={{ fontSize: 16 }}>Baru Rilis</Text>
            <Button onPress={() => navigation.navigate('AllBooks', { sort: 'baru-rilis' })} >Lihat semua</Button>
          </View>
          <BookList />
          <Button mode='elevated' onPress={() => logout()} >Keluar</Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeUser;