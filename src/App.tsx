import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { DonutPage } from '@/Pages/Donut'
import { AboutPage } from '@/Pages/About'
import { PhotoGalleryPage } from '@/Pages/PhotoGallery'
import { Blog } from '@/Pages/Blog'
import { BlogHome } from '@/Pages/Blog/BlogComponents/BlogHome'
import { AwayFromSmoking } from '@/Pages/Blog/BlogComponents/AwayFromSmoking'
import { Why1000000007 } from './Pages/Blog/BlogComponents/Why1000000007'
import { BinarySearch } from './Pages/Blog/BlogComponents/BinarySearch'
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
          <Route path="away-from-smoking" element={<AwayFromSmoking />} />
          <Route path="why-1000000007" element={<Why1000000007 />} />
          <Route path="binary-search" element={<BinarySearch />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
