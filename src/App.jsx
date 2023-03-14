import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Start from '../components/Start'
import Beratung from '../components/Beratung'
import Seminare from '../components/Seminare'
import About from '../components/Aboutus'
import Contact from '../components/Contact'
import Glossar from '../components/Glossar'
import Footer from '../components/Footer'
import Impressum from '../components/Impressum'
import Datenschutz from '../components/Datenschutz'



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="beratung" element={<Beratung/>}/>
        <Route path="seminare" element={<Seminare/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path='glossar' element={<Glossar/>}/>
        <Route path='datenschutz' element={<Datenschutz/>}/>
        <Route path='impressum' element={<Impressum/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
