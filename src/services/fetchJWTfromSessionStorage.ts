


export const fetchJWTfromSessionStorage =  () : string =>{
   
    //fetch value of cookie: jwt_token
    const token:string | null = sessionStorage.getItem('jwt_token');

    if(token){
        return token
    }else{
        return 'jwt_token not found'
    }
    
}