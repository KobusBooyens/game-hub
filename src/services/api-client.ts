import axios, {AxiosRequestConfig} from "axios"

export interface FetchResponse<T>{
    count: number,
    next: string | null
    results: T[]
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4e974cd573b24a6eb4ee7b38b2338b87'
    }
})


class ApiClient<T> {
    endpoint: string

    constructor(endpointValue: string) {
        this.endpoint = endpointValue
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(`${this.endpoint}`, config)
            .then((res) => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`)
            .then((res) => res.data)
    }
}

export default ApiClient