import * as axios from 'axios';

const instance = axios.create({
   withCredentials:true,
   baseURL:'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY':'376abf7f-d37f-4f52-b471-8307c13717fb'
   }
});


export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response =>response.data)
   },
   deleteUser(userId) {
      return instance.delete(`follow/${userId}`)
   },
   followUser(userId) {
      return instance.post(`follow/${userId}`)
   }
}
