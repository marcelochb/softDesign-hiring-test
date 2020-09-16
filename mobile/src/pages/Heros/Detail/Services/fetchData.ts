import { useRoute } from '@react-navigation/native';
import { ModelOfHerosDetailPageParameters } from '../Models';
import { useEffect, useState } from 'react';
import api from '@src/database/Services/api';
import {
  ModelOfResponseApiFromHerosComics,
  ModelOfTableHeroesComics,
} from '@src/database/Models';
import { Alert } from 'react-native';

export const useHerosDetailFetchDataService = () => {
  const route = useRoute<ModelOfHerosDetailPageParameters>();
  const [comics, setComics] = useState<ModelOfTableHeroesComics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get<ModelOfResponseApiFromHerosComics>(
          `${route.params.hero.id}/comics`,
        );
        setComics(response.data.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Falha de comunicação', error.response.data);
      }
    };
    loadData();
  }, []);

  return { comics, loading };
};
