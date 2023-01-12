


export const fetchJWTfromLocalStorage =  () : string =>{
   
    //fetch value of cookie: jwt_token
    const token:string | null = localStorage.getItem('jwt_token');

    if(token){
        return token
    }else{
        return 'jwt_token not found'
    }
    
}