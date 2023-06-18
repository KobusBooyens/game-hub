import {GameQuery} from "../App";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms";
import ApiClient, {FetchResponse} from "../services/api-client";

const apiClient = new ApiClient<Game>('/games')
export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number
}

const useGames = (gameQuery: GameQuery) => {
     return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) =>  apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        keepPreviousData: true,
         staleTime: 24 * 60 * 60 * 1000, //24hrs
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1: undefined
        }
    })
}

export default useGames