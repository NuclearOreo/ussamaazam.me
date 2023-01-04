import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { DonutPage } from '@/Pages/Donut'
import { AboutPage } from '@/Pages/About'
import { PhotoGalleryPage } from '@/Pages/PhotoGallery'
import { Blog } from '@/Pages/Blog'
import { BlogHome } from './Pages/Blog/Pages/BlogHome'
import { Header } from '@/Components/Header'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<DonutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<PhotoGalleryPage />} />
        </Route>
        <Route path="thoughts" element={<Blog />}>
          <Route path="" element={<BlogHome />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
