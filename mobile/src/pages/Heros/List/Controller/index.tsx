import { useEffect } from "react"
import api from "@src/database/Services/api"
import { useHerosListFetchDataService } from "../Services/fetchData"
import { useHerosListRouteService } from "../Services/route";

export const useHerosListController = () => {
  const { heroes, loading, fetchNextPage } = useHerosListFetchDataService();
  const { navigateToHerosDetail } = useHerosListRouteService();
  return {
    getController: {
      heroes,
      loading,
    },
    handleController: {
      fetchNextPage,
      navigateToHerosDetail
    }
  }
}
