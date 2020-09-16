import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Views, Texts, Heros } from '@src/styles';
import { useHerosDetailController } from '../Controller';
import { metrics, colors } from '@src/theme';
import { Loading } from '@src/components/UI/Loading/View';


export const HerosDetail: React.FC = () => {
  const { getController } = useHerosDetailController();
  if (getController.loading) return (
    <Loading />
  )
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={Heros.viewHero}>
          <Image
            style={Heros.image}
            source={{ uri: `${getController.hero.thumbnail.path}.${getController.hero.thumbnail.extension}` }}
          />
          <Text style={Heros.nameOfHero}>{getController.hero.name}</Text>
        </View>
        <Text style={Texts.body}>
          {getController.hero.description}
        </Text>
      </View>
      <Text style={styles.comics}>Quadrinhos</Text>
      <FlatList
        data={getController.comics}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
            resizeMode='cover'
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    ...Views.container,
  },
  header: {
    padding: metrics.large
  },
  image: {
    width: 180,
    height: 250,
    borderColor: colors.elements,
    borderWidth: 2,
    marginRight: metrics.base
  },
  comics: {
    ...Texts.title,
    color: colors.textHighlight,
    alignSelf: 'center',
    marginBottom: metrics.large
  }
})
