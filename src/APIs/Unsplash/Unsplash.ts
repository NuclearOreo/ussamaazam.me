import axios, { AxiosInstance } from 'axios'
import { PhotosResponse } from './types'

interface getPhotoType {
  pageNumber?: number
  perPage?: number
}

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

  async getMyPhoto({ pageNumber, perPage }: getPhotoType): Promise<PhotosResponse> {
    return this.service.get(
      `/users/ussamaazam/photos?page=${pageNumber ?? 1}&per_page=${perPage ?? 10}`,
    )
  }
}

export default Unsplash