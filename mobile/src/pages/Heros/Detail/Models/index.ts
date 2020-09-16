import { RouteProp } from '@react-navigation/native';
import { ModelOfTableHeroesCharacters } from '@src/database/Models';

type ModelOfNavigateParameters = {
  params: {
    hero: ModelOfTableHeroesCharacters;
  };
};

export type ModelOfHerosDetailPageParameters = RouteProp<
  ModelOfNavigateParameters,
  'params'
>;
