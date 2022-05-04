import { useState, useRef, useCallback } from 'react'
import { container, columns, column, loadingStyle } from './styles'
import { photoPagination } from 'APIs/Unsplash'
import loadingAnimation from 'Icons/three-dots.svg'

export function PhotoGallery() {
  const imageCols: JSX.Element[][] = [[], [], []]
  const colsHeights = [0, 0, 0]
  const [pageNumber, setPageNumber] = useState(1)
  const { images, loading, endOfPage, error } = photoPagination(pageNumber, 30)

  const observer = useRef<IntersectionObserver>()
  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !endOfPage) {
          setPageNumber((prev) => prev + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, endOfPage, error],
  )

  if (error) {
    // eslint-disable-next-line no-alert
    window.alert('Error Fetching Photo')
  }

  images.forEach((image, index) => {
    const minIndex = colsHeights.indexOf(Math.min(...colsHeights))
    if (index + 1 === images.length) {
      imageCols[minIndex].push(
        <a key={`${image.id}ANCHOR`} href={image.links.html}>
          <img
            ref={lastImageElementRef}
            key={image.id}
            className="hvr-grow"
            src={image.urls.regular}
            alt="Unsplash/Ussama Azam"
          />
        </a>,
      )
    } else {
      imageCols[minIndex].push(
        <a key={`${image.id}ANCHOR`} href={image.links.html}>
          <img key={image.id} className="hvr-grow" src={image.urls.regular} alt="" />
        </a>,
      )
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
          {loading && (
            <div className={loadingStyle}>
              <img src={loadingAnimation} alt="Loading SVG" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
