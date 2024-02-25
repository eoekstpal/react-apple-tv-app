import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'
import { useRef } from 'react'


const Layout = () => {
  return (
    <>
    <Nav />

    <Outlet />
    </>
  )
}

function App() {

  const ref = useRef('hi')

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='main' element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App