import { useRoute } from '@react-navigation/native';
import { ModelOfHerosDetailPageParameters } from '../Models';
import { useHerosDetailFetchDataService } from '../Services/fetchData';

export const useHerosDetailController = () => {
  const route = useRoute<ModelOfHerosDetailPageParameters>();
  const { comics, loading } = useHerosDetailFetchDataService();

  return {
    getController: {
      comics,
      loading,
      hero: route.params.hero,
    },
  };
};
