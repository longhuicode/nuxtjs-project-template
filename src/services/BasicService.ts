import Axios, { AxiosInstance } from 'axios'
import config from '~/constant/config'
import { onFulfilled, onRejected } from './interceptors'

export class BasicService {
  id = 0
  jsonrpc = '2.0'
  axios: AxiosInstance

  constructor () {
    this.axios = Axios.create({
      baseURL: config.servicesApi,
      withCredentials: true
    })
    this.axios.interceptors.response.use(onFulfilled, onRejected)
  }

  /**
   * rpc request method
   * @param method
   * @param params
   */
  rpc (method: string, params: any): Promise<any> {
    return this.axios.post(`/${method}`, {
      jsonrpc: this.jsonrpc,
      id: ++this.id,
      method,
      params: [params]
    })
  }
}
