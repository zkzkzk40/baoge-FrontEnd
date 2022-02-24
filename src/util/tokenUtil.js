export const saveToken=function (token){
    localStorage.setItem('token',token)
}
export const getToken=function (){
    return localStorage.getItem('token')
}
