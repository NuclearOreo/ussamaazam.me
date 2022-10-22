import { useState, useRef, useCallback } from 'react'
import {
  container,
  columnsStyles,
  columnStyles,
  loadingStyle,
  descriptionStyle,
  errorImgStyle,
  errorTextStyle,
  errorContainer,
} from './styles'
import { photoPagination } from 'APIs/Unsplash'
import loadingAnimation from 'Icons/three-dots.svg'

export function PhotoGalleryPage() {
  const mobileWidth = 767
  const numOfCols = window.screen.width <= mobileWidth ? 1 : 3
  const imageCols: JSX.Element[][] = []
  const colsHeights: number[] = []

  for (let i = 0; i < numOfCols; i += 1) {
    imageCols.push([])
    colsHeights.push(0)
  }

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
            alt="Unsplash"
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
        <div className={descriptionStyle}>
          I&apos;m a hobbyist photographer outside of work and pushing myself to come up with with
          creative work. Hope you enjoy my photos us much as I do!
        </div>
        <div className={columnsStyles}>
          <div key="col1" className={columnStyles}>
            {imageCols[0]}
          </div>
          <div key="col2" className={columnStyles}>
            {imageCols[1]}
          </div>
          <div key="col3" className={columnStyles}>
            {imageCols[2]}
          </div>
          {loading && !error && (
            <div className={loadingStyle}>
              <img src={loadingAnimation} alt="Loading SVG" loading="lazy" />
            </div>
          )}
          {error && (
            <div className={errorContainer}>
              <div className={errorImgStyle}>
                <img src="https://storage.googleapis.com/ussamazam-assets/error_gif.webp" alt="" />
              </div>
              <div className={errorTextStyle}>Something Went Wrong : (</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
