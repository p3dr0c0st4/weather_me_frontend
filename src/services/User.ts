import axios from 'axios';
import { LoginDto } from './dtos/LoginDto';

type PostResponse = {
    token: string;
};

export const login = async (loginData: LoginDto): Promise<boolean> => {
    try {
        const body = JSON.stringify(loginData);
        const { data } = await axios.post<PostResponse>(
            `${process.env.REACT_APP_API_URL}/user/login`,
            body,
            {
                //temporary path
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
        console.log(data.token);

        localStorage.setItem('jwt_token', data.token);
        console.log(localStorage.getItem('jwt_token'));

        return !!data.token;
    } catch (error) {
        console.log(error);
        return false;
    }
};
