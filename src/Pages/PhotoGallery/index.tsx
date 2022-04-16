/* eslint-disable react/no-array-index-key */
import { useState, useRef, useCallback } from 'react'
import { container, columns, column } from './PhotoGalleryStyle'
import { photoPagination } from 'CustomHooks/UnsplashHooks'

function PhotoGallery() {
  const imageCols: JSX.Element[][] = [[], [], []]
  const [pageNumber, setPageNumber] = useState(1)
  const { images, loading, error } = photoPagination(pageNumber, 30)

  const observer = useRef<IntersectionObserver>()
  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !error) {
          setPageNumber((prev) => prev + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading],
  )

  images.forEach((image, index) => {
    if (index + 1 === images.length) {
      imageCols[index % 3].push(
        <img ref={lastImageElementRef} key={index} src={image.urls.regular} alt="" />,
      )
    } else {
      imageCols[index % 3].push(<img key={index} src={image.urls.regular} alt="" />)
    }
  })

  return (
    <div>
      <div className={container}>
        <div className={columns}>
          {imageCols.map((item, index) => {
            return (
              <div key={index} className={column}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
