import axios from "axios";
import { HumidityDto } from "./dtos/HumidityDto";
import { jwtCookie } from "./middleware/token";



export const createHumidityItem = async (data: HumidityDto): Promise<boolean> => {
    //fetch validation token from cookie
    const token: string = jwtCookie();

    try {
        const body = JSON.stringify(data)
        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/humidity`, body, {
            headers: {
                'content-type': 'application/json',
                'authorization': token
            }
        })
        return resp.data.success
    } catch (error) {
        console.log(error)
        return false
    }
}

export const listAllHumidity = async (): Promise<HumidityDto[]> => {
    //fetch validation token from cookie
    const token: string = jwtCookie();

    try {

        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/humidity`, {
            headers: {
                'content-type': 'application/json',
                'authorization': token
            }
        })
        return resp.data.data

    } catch (error) {
        console.log(error)
        return []
    }
}

export const getHumidityItem = async (id: string): Promise<HumidityDto | null> => {
    //fetch validation token from cookie
    const token: string = jwtCookie();

    try {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/humidity/${id}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': token
            }
        });
        return resp.data.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const updateHumidityItem = async (id: string, data: HumidityDto): Promise<boolean> => {
    //fetch validation token from cookie
    const token: string = jwtCookie();

    try {
        const body = JSON.stringify(data)
        const resp = await axios.patch(`${process.env.REACT_APP_API_URL}/humidity/${id}`, body, {
            headers: {
                'content-type': 'application/json',
                'authorization': token
            }
        })
        return resp.data.success

    } catch (error) {
        console.log(error)
        return false
    }
}
export const deleteHumidtyItem = async (id: string): Promise<boolean> => {
    //fetch validation token from cookie
    const token: string = jwtCookie();
    
    try {

        const resp = await axios.delete(`${process.env.REACT_APP_API_URL}/humidity/${id}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': token
            }
        })

        return resp.data.success

    } catch (error) {
        console.log(error)
        return false
    }
}
