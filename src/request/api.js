import $http from './index.js'

export const enterPassword=(data)=>{
    let param = new URLSearchParams()
    param.append("password", data)
    return $http.post('/api/enterPassword', param)
}
export const login=function(username,password){
    let param = new URLSearchParams()
    param.append("username", username)
    param.append("password", password)
    return $http.post('/user/houtai_login', param)
}
