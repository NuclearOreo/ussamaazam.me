import { useState, useRef, useCallback } from 'react'
import { container, columns, column } from './PhotoGalleryStyle'
import { photoPagination } from 'CustomHooks/UnsplashHooks'

function PhotoGallery() {
  const imageCols: JSX.Element[][] = [[], [], []]
  const colsHeights = [0, 0, 0]
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
    [loading, error],
  )

  images.forEach((image, index) => {
    const minIndex = colsHeights.indexOf(Math.min(...colsHeights))
    if (index + 1 === images.length) {
      imageCols[minIndex].push(
        <img ref={lastImageElementRef} key={image.id} src={image.urls.regular} alt="" />,
      )
    } else {
      imageCols[minIndex].push(<img key={image.id} src={image.urls.regular} alt="" />)
    }
    colsHeights[minIndex] += image.height
  })

  return (
    <div>
      <div className={container}>
        <div className={columns}>
          <div key="col1" className={column}>
            {imageCols[0]}
          </div>
          <div key="col2" className={column}>
            {imageCols[1]}
          </div>
          <div key="col3" className={column}>
            {imageCols[2]}
          </div>
          <div>{loading ?? 'Loading...'}</div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
