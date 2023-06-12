import useData from "./useData";

interface Genre{
    id: number,
    name: string,
    slug: string
}

const useGenre = () => useData<Genre>('/genres')

export default useGenre