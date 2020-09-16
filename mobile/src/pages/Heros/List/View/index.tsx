import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useHerosListController } from '../Controller';
import { Views, Texts } from '@src/styles';
import { Loading } from '@src/components/UI/Loading/View';
import { CardOfHeroList } from './Card/View';


export const HerosList: React.FC = () => {
  const { getController, handleController } = useHerosListController();
  if (getController.loading) return (
    <Loading />
  )
  return (
    <View style={Views.container}>
      <FlatList
        data={getController.heroes}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleController.fetchNextPage}
        onEndReachedThreshold={3.0}
        renderItem={({ item }) => (
          <CardOfHeroList
            nameOfHero={item.name}
            imageOfHero={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            navigateToDetail={() => handleController.navigateToHerosDetail(item)}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Views.container
  }
})
