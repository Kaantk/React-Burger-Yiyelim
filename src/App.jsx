import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import ErrorPage from './components/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/menu' exact element={<Menu/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='*' exact element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
