import { useNavigation } from '@react-navigation/native';
import { ModelOfTableHeroesCharacters } from '@src/database/Models';

export const useHerosListRouteService = () => {
  const navigation = useNavigation();

  const navigateToHerosDetail = (hero: ModelOfTableHeroesCharacters) =>
    navigation.navigate('HerosDetail', { hero });

  return { navigateToHerosDetail };
};
