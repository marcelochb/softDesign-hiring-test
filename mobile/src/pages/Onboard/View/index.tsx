import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Views, Texts } from '@src/styles';
import ImageSoftDesign from '@src/assets/Images/softDesign.svg';
import ImageMarvel from '@src/assets/Images/marvel.svg';
import { metrics } from '@src/theme';
import { ButtonBase } from '@src/components/UI';
import { useOnboardController } from '../Controller';

export const Onboard: React.FC = () => {
  const { handleController } = useOnboardController();
  return (
    <SafeAreaView style={styles.container}>
      <ImageSoftDesign style={styles.softDesigh} />
      <ImageMarvel />
      <Text style={Texts.body}>
        {`Hiring test para a SoftDesign!
    Objetivo:
        - Criar um app utilizando a
        api publica da Marvel;
    Funcionalidades:
        - Lista de Personagens;
        - Tela de Detalhes do Personagem;`}
      </Text>
      <Text style={styles.signedBy}>by Marcelo Block Teixeira</Text>
      <View style={styles.button}>
        <ButtonBase
          labelOfButtonBase={'Vamos lá!'}
          onPress={handleController.checkOnboard}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Views.container,
    alignItems: 'center',
  },
  softDesigh: {
    marginTop: metrics.large
  },
  button: {
    ...Views.content,
    paddingTop: metrics.largest
  },
  signedBy: {
    ...Texts.subTitle,
    alignSelf: 'flex-end',
    marginRight: metrics.large,
    marginTop: metrics.small
  }
})
