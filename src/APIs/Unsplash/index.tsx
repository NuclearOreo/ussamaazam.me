import { useState, useEffect } from 'react'
import Unsplash from 'APIs/Unsplash/Unsplash'
import { Datum } from 'APIs/Unsplash/types'
import { AxiosError } from 'axios'

const unsplash = new Unsplash()

export function photoPagination(pageNumber?: number, perPage?: number) {
  const [images, setImages] = useState<Datum[]>([])
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
        setImages([...images, ...res.data])
      })
      .catch((errorRes: AxiosError) => {
        if (errorRes.message === 'Request failed with status code 403') {
          setEndOfPage(true)
        }
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
