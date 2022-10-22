import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { UnsplashType } from './types'

interface getPhotoType {
  pageNumber?: number
  perPage?: number
}

class Unsplash {
  private baseUrl: string
  private service: AxiosInstance

  constructor() {
    this.baseUrl = 'http://unsplash-api-dsoicsjfka-uc.a.run.app'
    this.service = axios.create({
      baseURL: this.baseUrl,
    })
  }

  async getMyPhoto({ pageNumber, perPage }: getPhotoType): Promise<AxiosResponse<UnsplashType[]>> {
    const response = this.service.get(
      `/unsplash/get_photos?page_number=${pageNumber ?? 1}&per_page=${perPage ?? 10}`,
    )
    return response
  }
}

export default Unsplash
