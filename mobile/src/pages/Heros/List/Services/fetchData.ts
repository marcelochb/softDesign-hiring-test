import { useEffect, useState } from 'react';
import api from '@src/database/Services/api';
import {
  ModelOfTableHeroesCharacters,
  ModelOfResponseApiFromHerosCharacters,
} from '@src/database/Models';
import { Alert } from 'react-native';

export const useHerosListFetchDataService = () => {
  const [heroes, setHeroes] = useState<ModelOfTableHeroesCharacters[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingFilterByHerosName, setLoadingFilterByHerosName] = useState(
    false,
  );
  const [page, setPage] = useState(0);
  const [qtdPerPage] = useState(10);
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get<ModelOfResponseApiFromHerosCharacters>(
          '',
          {
            params: {
              limit: qtdPerPage,
              offset: page,
            },
          },
        );
        setHeroes(response.data.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Falha de comunicação', error.response.data);
      }
    };
    loadData();
  }, []);

  const fetchNextPage = async () => {
    try {
      const response = await api.get<ModelOfResponseApiFromHerosCharacters>(
        '',
        {
          params: {
            limit: qtdPerPage,
            offset: (page + 1) * qtdPerPage,
          },
        },
      );
      setHeroes(currentHeroes =>
        currentHeroes.concat(response.data.data.results),
      );
      setPage(currentPage => currentPage + 1);
    } catch (error) {
      Alert.alert('Falha de comunicação', error.response.data);
    }
  };

  const filterByHerosName = async (nameOfHero: string) => {
    try {
      if (nameOfHero) {
        setLoadingFilterByHerosName(true);
        const response = await api.get<ModelOfResponseApiFromHerosCharacters>(
          '',
          {
            params: {
              nameStartsWith: nameOfHero,
            },
          },
        );
        setHeroes(response.data.data.results);
        setLoadingFilterByHerosName(false);
      }
    } catch (error) {
      setLoadingFilterByHerosName(false);
      Alert.alert('Falha de comunicação', error.response.data);
    }
  };

  return {
    getFetchData: {
      heroes,
      loading,
      loadingFilterByHerosName,
    },
    handleFetchData: {
      fetchNextPage,
      filterByHerosName,
    },
  };
};
