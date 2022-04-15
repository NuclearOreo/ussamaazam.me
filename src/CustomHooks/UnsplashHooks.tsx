import { useState, useEffect } from 'react'
import Unsplash from 'APIs/Unsplash'

const unsplash = new Unsplash()

export function getPhoto(pageNumber: number) {
  const [images, setImages] = useState<any[]>([])

  useEffect(() => {
    unsplash
      .getMyPhoto(pageNumber)
      .then((res) => {
        setImages([...images, ...res.data])
      })
      .catch((e) => {
        console.log(e)
      })
  }, [pageNumber])

  return { images }
}
