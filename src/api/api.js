import * as axios from 'axios';

const instance = axios.create({
   withCredentials:true,
   baseURL:'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY':'cc18a240-bb7e-40b8-95c3-3da65e4fc4f9'
   }
});


export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response =>response.data)
   },
   deleteUser(userId) {
      return instance.delete(`follow/${userId}`);
   },
   followUser(userId) {
      return instance.post(`follow/${userId}`);
   },
   getProfile(userId) {
      return profileAPI.getProfile(userId);
   }
}


export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/`+userId);
   },
   getStatus(userId) {
      return instance.get(`profile/status/`+userId);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status});
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
   userLogin() {
      return instance.post('auth/login')
   },
   userLogout() {
      return instance.delete('auth/login')
   }
}