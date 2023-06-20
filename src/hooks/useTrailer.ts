import ApiClient from "../services/api-client";
import {Trailer} from "../entities/Trailer";
import {useQuery} from "@tanstack/react-query";
import ms from "ms";

const UseTrailer = (gameId: number) => {
     const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`)

   return useQuery({
        queryKey: ['trailer',gameId],
        queryFn: apiClient.getAll,
        staleTime: ms('24h')
    })
}

export default UseTrailer
