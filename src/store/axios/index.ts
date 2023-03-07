import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { axiosBaseOptions } from './axios-setup';

class MyAxios {
  private readonly axiosInstance: AxiosInstance
  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.initInterceptors();
  }

  private initInterceptors() {
    this.axiosInstance.defaults.withCredentials = true;
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig | any) => {
        return config;
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  get<T = any>(url: string, data?: object): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(url, { params: data });
  }

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post(url, data, config);
  }

  put<T = any>(url: string, data?: object): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put(url, data);
  }

  delete<T = any>(url: string, data?: object): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete(url, data);
  }
}

export const request = new MyAxios(axiosBaseOptions)
