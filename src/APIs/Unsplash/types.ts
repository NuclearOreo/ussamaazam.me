/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UnsplashType {
  alt_description?: any
  blur_hash: string
  color: string
  created_at: string
  current_user_collections: any[]
  description?: any
  height: number
  id: string
  liked_by_user: boolean
  likes: number
  links: Links
  promoted_at?: string
  sponsorship?: any
  topic_submissions: any
  updated_at: string
  urls: Urls
  user: User
  width: number
}

interface User {
  accepted_tos: boolean
  bio: string
  first_name: string
  for_hire: boolean
  id: string
  instagram_username: string
  last_name: string
  links: Links2
  location?: any
  name: string
  portfolio_url?: any
  profile_image: Profileimage
  social: Social
  total_collections: number
  total_likes: number
  total_photos: number
  twitter_username?: any
  updated_at: string
  username: string
}

interface Social {
  instagram_username: string
  paypal_email?: any
  portfolio_url?: any
  twitter_username?: any
}

interface Profileimage {
  large: string
  medium: string
  small: string
}

interface Links2 {
  followers: string
  following: string
  html: string
  likes: string
  photos: string
  portfolio: string
  self: string
}

interface Urls {
  full: string
  raw: string
  regular: string
  small: string
  small_s3: string
  thumb: string
}

interface Links {
  download: string
  download_location: string
  html: string
  self: string
}
