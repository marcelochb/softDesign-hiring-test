import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ModelOfCardOfHeroList } from '../Models';
import { colors, metrics } from '@src/theme';
import { Texts, Heros } from '@src/styles';
import { ButtonBase } from '@src/components/UI';


export const CardOfHeroList: React.FC<ModelOfCardOfHeroList> = ({
  nameOfHero,
  imageOfHero,
  navigateToDetail,
}) => {
  return (
    <View style={styles.container}>
      <View style={Heros.viewHero}>

        <Image
          style={Heros.image}
          source={{ uri: imageOfHero }}
        />
        <Text style={Heros.nameOfHero}>{nameOfHero}</Text>
      </View>
      <ButtonBase
        labelOfButtonBase={'Detalhes'}
        onPress={navigateToDetail}
        isOutline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.elementsSecundary,
    // marginHorizontal: metrics.large,
    padding: metrics.base,
    marginBottom: metrics.large,
    borderRadius: metrics.radiusBase
  },
})
