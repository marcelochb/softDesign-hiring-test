import { useEffect, useState } from 'react';
import api from '@src/database/Services/api';
import {
  ModelOfTableHeroesCharacters,
  ModelOfResponseApiFromHerosCharacters,
} from '@src/database/Models';
import { current } from 'immer';

export const useHerosListFetchDataService = () => {
  const [heroes, setHeroes] = useState<ModelOfTableHeroesCharacters[]>([]);
  const [loading, setLoading] = useState(true);
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
        console.tron.log(response);
        setHeroes(response.data.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.tron.log(error.response);
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
      console.tron.log(response.data);
      setHeroes(currentHeroes =>
        currentHeroes.concat(response.data.data.results),
      );
      setPage(currentPage => currentPage + 1);
    } catch (error) {
      console.tron.log(error.response);
    }
  };

  return { heroes, loading, fetchNextPage };
};
