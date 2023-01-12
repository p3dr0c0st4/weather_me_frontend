import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';



export const jwtCookie = () : string =>{
    //
    const cookies = new Cookies();

    //fetch value of cookie: jwt_token
    const token:string = cookies.get('jwt_token');
    
    return token
}