import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reading-app-thptpm.herokuapp.com/api',
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access_vue_token')
  }
});

export default axiosInstance;
export const sendGet = (url: string, params?: any) =>
  axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams }).then((res) => res.data);
export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { data: params }).then((res) => res.data);
export const sendUpload = (url: string, file: any) => {
  const formData = new FormData();
  formData.append('certification', file);
  return axiosInstance.put(url, formData).then((res) => res.data);
};