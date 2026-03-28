import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/About'
import Menu from './components/Menu'
import Items from './components/Items'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className=' text-black  font-serif'>
        <div className='hero-bg' id='home'>
          <Navbar />
          <Hero />
        </div>

        <div className='' id='about'>
          <Feature />
        </div>

        <div id='menu'>
          <Menu />
          <Items />
        </div>

        <div id='gallery'>
          <Gallery />
        </div>

        <div id='contact'>
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
