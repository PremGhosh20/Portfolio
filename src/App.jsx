import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import LoadingScreen from './components/LoadingScreen'

const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <LoadingScreen />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
