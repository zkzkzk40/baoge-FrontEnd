import $http from './index.js'
// import qs from 'qs'
export const login=function(username,password){
    // let param = new URLSearchParams()
    // param.append("username", username)
    // param.append("password", password)
    let data={}
    data.username=username
    data.password=password
    return $http.post('/houtai_user/login', JSON.stringify(data))
}
export const findCabinetId=function(data){
    let param={}
    param.cabinet_province=data.province
    param.cabinet_city=data.city
    param.cabinet_county=data.area
    param.cabinet_location_name=data.school
    param.cabinet_name=data.build
    return $http.post('/cabinet/findCabinetId', JSON.stringify(param))
}
export const findCabinetSituation=function(cabinet_id){
    let param={}
    param.cabinet_id=cabinet_id
    return $http.post('/cabinet/findCabinetSituation', JSON.stringify(param))
}
export const changePassword=function(password){
    let param={
        userId:localStorage.getItem('userId'),
        username:localStorage.getItem('username'),
        newPassword:password
    }
    return $http.post('/houtai_user/updateUser', JSON.stringify(param))
}
