import { container, colums, colum } from './PhotoGalleryStyle'

function PhotoGallery() {
  return (
    <div>
      <div className={container}>
        <div className={colums}>
          <div className={colum}>A</div>
          <div className={colum}>B</div>
          <div className={colum}>C</div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
