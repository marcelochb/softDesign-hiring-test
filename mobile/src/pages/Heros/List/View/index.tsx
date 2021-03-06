import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useHerosListController } from '../Controller';
import { Views, Texts } from '@src/styles';
import { Loading } from '@src/components/UI/Loading/View';
import { CardOfHeroList } from './Card/View';
import { InputText } from '@src/components/UI/InputText/View';
import { metrics, colors } from '@src/theme';
import { LoadingButton } from '@src/components/UI';


export const HerosList: React.FC = () => {
  const { getController, handleController } = useHerosListController();
  if (getController.loading) return (
    <Loading />
  )
  return (
    <React.Fragment>

      <View style={styles.container}>
        <InputText
          labelOfInputText={'buscar'}
          onChangeText={handleController.onChangeFilter}
          valueOfInputText={getController.nameOfHero}
        />
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
      <LoadingButton loading={getController.loadingFilterByHerosName} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...Views.container,
    backgroundColor: colors.background,
    height: '100%',
    paddingHorizontal: metrics.large
  }
})
