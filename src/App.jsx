import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/home.jsx'
import NotFoundPage from './pages/NotFoundPage'
import SermonsPage from './pages/SermonsPage'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sermons" element={<SermonsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
