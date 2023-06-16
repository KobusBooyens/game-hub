import useData, {FetchResponse} from "./useData";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genres from "../data/genres";
import {Genre} from "./useGenre";
import platforms from "../data/platforms";

interface Platform{
    id: number,
    name: string,
    slug: string
}

// const usePlatform = () => useData<Platform>('/platforms/lists/parents')


const usePlatform = () => {
    return useQuery<Genre[], Error>({
        queryKey: ['platforms'],
        queryFn: () =>  apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24hrs
        initialData: {count: platforms.length, results: platforms}
    })
}

export default usePlatform