import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {Text} from 'react-native-paper';
import useList from '../hooks/useList';
import MyCard from '../components/MyCard';
import Loading from '../components/Loading';

export default function HomeScreen() {
  const {loading, error, data, onGetList} = useList();

  // Flatlist
  const renderItem = useCallback(({item}: any) => <MyCard {...item} />, []);
  const keyExt = useCallback((i: any, index: number) => index.toString(), []);

  if (loading) return <Loading />;

  if (error) return <Text>Error</Text>;
  else
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExt}
          maxToRenderPerBatch={8}
          windowSize={10}
          refreshControl={
            <RefreshControl onRefresh={onGetList} refreshing={false} />
          }
          contentContainerStyle={{paddingHorizontal: 20}}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
