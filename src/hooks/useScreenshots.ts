import ApiClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import ms from "ms";
import {Screenshot} from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
    const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey: ['screenshot',gameId],
        queryFn: apiClient.getAll,
        staleTime: ms('24h')
    })
}

export default useScreenshots