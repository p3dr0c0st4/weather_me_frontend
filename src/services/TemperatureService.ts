import CompoundedSpace from 'antd/es/space';
import axios from 'axios';
import { TemperatureDto } from './dtos/TemperatureDto';

export const createItem = async (data:TemperatureDto): Promise<boolean> => {
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

export const listAll = async (): Promise<TemperatureDto[]> => {
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
export const getItem = async (id:string): Promise<TemperatureDto | null> => {
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


export const updateItem = async (id:string, data:TemperatureDto): Promise<boolean> => {
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

export const deleteItem = async (id:string): Promise<boolean> => {
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