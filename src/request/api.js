import $http from './index.js'

export const enterPassword=(data)=>{
    let param = new URLSearchParams()
    param.append("password", data)
    return $http.post('/api/enterPassword', param)
}
