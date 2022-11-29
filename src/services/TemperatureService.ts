import axios from 'axios';

export const create = async () => {
    try {
            const body = JSON.stringify()
           const resp = await axios.post<DataResponse<>>(`/temperature/create`);
            return resp.data
    } catch (error) {
        console.log(error)
    }
}