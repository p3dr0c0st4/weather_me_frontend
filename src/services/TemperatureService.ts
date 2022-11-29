import axios from 'axios';
import { TemperatureDto } from './dtos/TemperatureDto';

export const create = async (data:TemperatureDto): Promise<boolean> => {
    try {
            const body = JSON.stringify(data)
            const resp = await axios.post(`${process.env.REACT_APP_API_URL}/temperature`,body,{
                headers:{
                    'content-type': 'application/json'
                }
            });
            return resp.data.success
    } catch (error) {
        console.log(error)
        return false;
    }
}