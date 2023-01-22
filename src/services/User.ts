import axios from 'axios';
import { LoginDto } from './dtos/LoginDto';


export const login = async (data: LoginDto): Promise<boolean> => {


    try {
        const body = JSON.stringify(data) //http://localhost:3000/api/v1/user/login
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, body, {
            withCredentials: true,
            headers: {
                'content-type': 'application/json'
            }
        })

            return res.data.success
        


    } catch (error) {
        console.log(error)
        return false;
    }
}