import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { DonutPage } from 'Pages/Donut'
import { AboutPage } from 'Pages/About'
import { PhotoGalleryPage } from 'Pages/PhotoGallery'
import { BlogPage } from 'Pages/Blog'
import { Header } from 'Components/Header'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<DonutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<PhotoGalleryPage />} />
        </Route>
        <Route path="thoughts" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
