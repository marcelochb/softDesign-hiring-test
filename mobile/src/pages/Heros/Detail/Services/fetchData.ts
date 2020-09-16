import { useRoute } from '@react-navigation/native';
import { ModelOfHerosDetailPageParameters } from '../Models';
import { useEffect, useState } from 'react';
import api from '@src/database/Services/api';
import {
  ModelOfResponseApiFromHerosComics,
  ModelOfTableHeroesComics,
} from '@src/database/Models';

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
        console.tron.log(response);
        setComics(response.data.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.tron.log(error.response);
      }
    };
    loadData();
  }, []);

  return { comics, loading };
};
