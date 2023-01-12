import axios from 'axios';
import { LoginDto } from './dtos/LoginDto';



export const login = async (data: LoginDto): Promise<boolean> => {

    

    try {
        const body = JSON.stringify(data)
        const res = await axios.post(`http://localhost:3000/login`, body, { //temporary path
            headers: {
                'content-type': 'application/json'
            }
        });
            
            sessionStorage.setItem("jwt_token", res.data.token);


            return res.data.success
        


    } catch (error) {
        console.log(error)
        return false;
    }
}