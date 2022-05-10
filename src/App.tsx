import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DonutPage } from 'Pages/Donut'
import { AboutPage } from 'Pages/About'
import { PhotoGalleryPage } from 'Pages/PhotoGallery'
// import Blog from 'Pages/Blog'
import { ErrorPage } from 'Pages/Error'
import { Header } from 'Components/Header'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<DonutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<PhotoGalleryPage />} />
          {/* <Route path="blog" element={<Blog />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
