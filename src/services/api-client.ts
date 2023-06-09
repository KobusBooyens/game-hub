import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4e974cd573b24a6eb4ee7b38b2338b87'
    }
})