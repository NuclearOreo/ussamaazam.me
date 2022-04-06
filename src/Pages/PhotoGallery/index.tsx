import { useState } from 'react'
import { container, columns, column } from './PhotoGalleryStyle'
import Unsplash from 'APIs/Unsplash'

function PhotoGallery() {
  const [imageArray1, setImageArray1] = useState<JSX.Element[]>([
    <img
      key="1"
      src="https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/1543247944657-TX8QBZ5DKCS32LE639PS/guts+and+schierke.PNG?format=1500w"
      alt=""
    />,
    <img key="2" src="https://pbs.twimg.com/media/E1zX01DWEAIP4AP?format=jpg&name=small" alt="" />,
  ])

  const [imageArray2] = useState<JSX.Element[]>([
    <img key="1" src="https://miro.medium.com/max/1400/0*PEuJrbZc6KHh33ua.jpeg" alt="" />,
    <img
      key="2"
      src="https://i.pinimg.com/736x/3d/44/a4/3d44a4fa5a7fb42d98ba7f5afd577a72.jpg"
      alt=""
    />,
  ])

  const [imageArray3] = useState<JSX.Element[]>([
    <img
      key="1"
      src="https://i.pinimg.com/originals/01/20/1a/01201aaec7e50ce6a4bde0b6d082e700.jpg"
      alt=""
    />,
    <img
      key="2"
      src="https://assets.dicebreaker.com/berserk-manga-kentaro-miura-dragon-slayer.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/berserk-manga-kentaro-miura-dragon-slayer.jpg"
      alt=""
    />,
  ])

  async function test() {
    const testing = new Unsplash()
    const response = await testing.getMyPhoto()

    response.data.forEach((item) => {
      imageArray1.push(<img src={item.urls.regular} alt="" />)
      setImageArray1([...imageArray1])
    })
  }

  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          await test()
        }}
      >
        Testing
      </button>
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
