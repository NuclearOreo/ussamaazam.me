import { useState, useEffect } from 'react'
import Unsplash from '@/APIs/Unsplash/Unsplash'
import { UnsplashType } from '@/APIs/Unsplash/types'

export const unsplash = new Unsplash()

export function photoPagination(pageNumber?: number, perPage?: number) {
  const [images, setImages] = useState<UnsplashType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [endOfPage, setEndOfPage] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    unsplash
      .getMyPhoto({ pageNumber, perPage })
      .then((res) => {
        setLoading(false)
        if (res.data.length > 0) {
          setImages([...images, ...res.data])
        } else {
          setEndOfPage(true)
        }
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [pageNumber])

  return {
    images,
    loading,
    error,
    endOfPage,
  }
}
