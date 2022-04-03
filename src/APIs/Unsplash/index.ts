import axios, { AxiosInstance } from 'axios'

class Unsplash {
  private baseUrl: string
  private service: AxiosInstance

  constructor() {
    this.baseUrl = 'https://api.unsplash.com'
    const clientID = ''
    this.service = axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: `Client-ID ${clientID}`,
      },
    })
  }

  async getPhoto(): Promise<any> {
    return this.service.get('/users/ussamaazam/photos')
  }
}

export default Unsplash
