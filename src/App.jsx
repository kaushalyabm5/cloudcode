
import CardCarousel from './components/CardCarousel';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SmoothScroll from './components/SmoothScroll';
import Stats from './components/Stats';


const App = () => {



  return (
    <SmoothScroll>
    <div
      className="
        min-h-screen 
        bg-cover 
        bg-center
        bg-fixed
        bg-[url('/src/assets/hero-bg-mobile.png')]
        md:bg-[url('/src/assets/hero-bg.png')]
      "
    >
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      
        
    
    </div>
    </SmoothScroll>
  )
}

export default App;