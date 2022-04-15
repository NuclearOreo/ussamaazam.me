import { useState, useEffect } from 'react'
import { container, columns, column } from './PhotoGalleryStyle'
import Unsplash from 'APIs/Unsplash'

function PhotoGallery() {
  const [imageArray1, setImageArray1] = useState<JSX.Element[]>([])
  const [imageArray2, setImageArray2] = useState<JSX.Element[]>([])
  const [imageArray3, setImageArray3] = useState<JSX.Element[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [photoIndex, setPhotoIndex] = useState(0)

  async function grabPhoto() {
    const unsplash = new Unsplash()
    const cols = [imageArray1, imageArray2, imageArray3]
    const response = await unsplash.getMyPhoto(pageNumber)
    let index = photoIndex

    for (const item of response.data) {
      cols[index % 3].push(<img key={index} src={item.urls.regular} alt="" loading="lazy" />)
      index += 1
    }

    setPhotoIndex(photoIndex + 1)
    setPageNumber(pageNumber + 1)
    setImageArray1([...imageArray1])
    setImageArray2([...imageArray2])
    setImageArray3([...imageArray3])
  }

  useEffect(() => {
    grabPhoto()
  }, [])

  return (
    <div>
      <div className={container}>
        <div className={columns}>
          {[imageArray1, imageArray2, imageArray3].map((item, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
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
