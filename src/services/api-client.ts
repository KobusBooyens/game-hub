import axios, {AxiosRequestConfig} from "axios"

export interface FetchResponse<T>{
    count: number,
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
}

export default ApiClient