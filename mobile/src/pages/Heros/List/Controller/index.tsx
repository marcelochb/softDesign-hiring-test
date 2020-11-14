import { useEffect, useState } from "react"
import api from "@src/database/Services/api"
import { useHerosListFetchDataService } from "../Services/fetchData"
import { useHerosListRouteService } from "../Services/route";

export const useHerosListController = () => {
  const { getFetchData, handleFetchData } = useHerosListFetchDataService();
  const { navigateToHerosDetail } = useHerosListRouteService();
  const [nameOfHero, setNameOfHero] = useState('');

  const onChangeFilter = (e: string | React.ChangeEvent<any>) => {
    setNameOfHero(e.toString());
    handleFetchData.filterByHerosName(e.toString());
  }
  return {
    getController: {
      heroes: getFetchData.heroes,
      loading: getFetchData.loading,
      loadingFilterByHerosName: getFetchData.loadingFilterByHerosName,
      nameOfHero
    },
    handleController: {
      fetchNextPage: handleFetchData.fetchNextPage,
      filterByHerosName: handleFetchData.filterByHerosName,
      navigateToHerosDetail,
      onChangeFilter,
    }
  }
}
