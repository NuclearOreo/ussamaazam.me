export interface PhotosResponse {
  data: Datum[]
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: Request
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Request {}

interface Config {
  transitional: Transitional
  transformRequest: null[]
  transformResponse: null[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  headers: Headers2
  baseURL: string
  method: string
  url: string
}

interface Headers2 {
  Accept: string
  Authorization: string
}

interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

interface Headers {
  'cache-control': string
  'content-language': string
  'content-length': string
  'content-type': string
  link: string
  'x-per-page': string
  'x-ratelimit-limit': string
  'x-ratelimit-remaining': string
  'x-total': string
}

export interface Datum {
  id: string
  created_at: string
  updated_at: string
  promoted_at?: string
  width: number
  height: number
  color: string
  blur_hash: string
  description?: unknown
  alt_description?: string
  urls: Urls
  links: Links
  categories: unknown[]
  likes: number
  liked_by_user: boolean
  current_user_collections: unknown[]
  sponsorship?: unknown
  topic_submissions: Topicsubmissions
  user: User
}

interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: unknown
  portfolio_url: string
  bio: string
  location?: unknown
  links: Links2
  profile_image: Profileimage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

interface Social {
  instagram_username: string
  portfolio_url: string
  twitter_username?: unknown
  paypal_email?: unknown
}

interface Profileimage {
  small: string
  medium: string
  large: string
}

interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

interface Topicsubmissions {
  architecture?: Architecture
  'architecture-interior'?: Architecture
  experimental?: Architecture
  'textures-patterns'?: Architecture
}

interface Architecture {
  status: string
  approved_on: string
}

interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
