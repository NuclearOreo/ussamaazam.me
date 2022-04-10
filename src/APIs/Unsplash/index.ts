import axios, { AxiosInstance } from 'axios'
import { Photos } from './types'

class Unsplash {
  private baseUrl: string
  private service: AxiosInstance

  constructor() {
    this.baseUrl = 'https://api.unsplash.com'
    this.service = axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: process.env.REACT_APP_UNSPLASH ?? '',
      },
    })
  }

  async getMyPhoto(pageNumber = 1, prePage = 10): Promise<Photos> {
    return this.service.get(`/users/ussamaazam/photos?page=${pageNumber}&per_page=${prePage}`)
  }
}

export default Unsplash
