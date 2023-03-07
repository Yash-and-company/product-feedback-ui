import { AxiosRequestConfig } from 'axios';

export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
  },
}
