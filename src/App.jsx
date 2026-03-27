
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
function App() {

  return (
    <>
      <div className=' text-gray-700  font-serif'>
        <div className='hero-bg'>
          <Navbar />
          <Hero />
        </div>

        <div className=' bg-pink-100'>
          <Feature />

        </div>
      </div>
    </>
  )
}

export default App
