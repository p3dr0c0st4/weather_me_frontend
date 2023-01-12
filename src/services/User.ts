import axios from 'axios';
import { LoginDto } from './dtos/LoginDto';
import Cookies from 'universal-cookie';


export const login = async (data: LoginDto): Promise<boolean> => {

    const cookies = new Cookies();

    try {
        const body = JSON.stringify(data)
        const res = await axios.post(`http://localhost:3000/login`, body, {
            headers: {
                'content-type': 'application/json'
            }
        });


        
            const token = res.data.token;
            

            cookies.set('jwt_token', token,
                {
                    expires: new Date(token.exp * 100000)
                }
            );


            return res.data.success
        


    } catch (error) {
        console.log(error)
        return false;
    }
}