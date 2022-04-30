import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Donut from 'Pages/Donut'
import About from 'Pages/About'
import PhotoGallery from 'Pages/PhotoGallery'
import Blog from 'Pages/Blog'
import ErrorPage from 'Pages/Error'
import Header from 'Components/Header'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<Donut />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<PhotoGallery />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
