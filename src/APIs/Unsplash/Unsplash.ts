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
    this.baseUrl = 'https://unsplash-api-dsoicsjfka-uc.a.run.app'
    this.service = axios.create({
      baseURL: this.baseUrl,
    })
  }

  async getMyPhoto({ pageNumber, perPage }: getPhotoType): Promise<PhotosResponse> {
    return this.service.get(
      `/unsplash/get_photos?page_number=${pageNumber ?? 1}&per_page=${perPage ?? 10}`,
    )
  }
}

export default Unsplash
