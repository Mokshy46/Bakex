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
        <Navbar />
        
        <div className='hero-bg scroll-mt-24' id='home'>
          <Hero />
        </div>

        <div className='scroll-mt-24' id='about'>
          <Feature />
        </div>

        <div id='menu' className='scroll-mt-24'>
          <Menu />
          <Items />
        </div>

        <div id='gallery' className='scroll-mt-24'>
          <Gallery />
        </div>

        <div id='contact' className='scroll-mt-24'>
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
