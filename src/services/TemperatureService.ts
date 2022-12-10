import axios from 'axios';
import { TemperatureDto } from './dtos/TemperatureDto';

export const createTemperatureItem = async (data:TemperatureDto): Promise<boolean> => {
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

export const listAllTemperature = async (): Promise<TemperatureDto[]> => {
    try {
            const resp = await axios.get(`${process.env.REACT_APP_API_URL}/temperature`,{
                headers:{
                    'content-type': 'application/json'
                }
            });
            return resp.data.data
    } catch (error) {
        console.log(error)
        return [];
    }
}
export const getTemperatureItem = async (id:string): Promise<TemperatureDto | null> => {
    try {
            const resp = await axios.get(`${process.env.REACT_APP_API_URL}/temperature/${id}`,{
                headers:{
                    'content-type': 'application/json'
                }
            });
            return resp.data.data
    } catch (error) {
        console.log(error)
        return null
    }
}


export const updateTemperatureItem = async (id:string, data:TemperatureDto): Promise<boolean> => {
    try {
            const body = JSON.stringify(data)
            const resp = await axios.patch(`${process.env.REACT_APP_API_URL}/temperature/${id}`,body,{
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

export const deleteTemperatureItem = async (id:string): Promise<boolean> => {
    try {
            const resp = await axios.delete(`${process.env.REACT_APP_API_URL}/temperature/${id}`,{
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