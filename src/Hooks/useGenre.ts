import genres from '../data/genres'
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client";
import {FetchResponse} from "./useData";

export interface Genre{
    id: number,
    name: string,
    slug: string,
    image_background: string
}

const useGenre = () => {
    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () =>  apiClient.get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24hrs
        initialData: { count: genres.length, results: genres }
    })
}


export default useGenre