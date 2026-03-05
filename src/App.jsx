

import AboutPart5 from './components/AboutPart5';

import Contact from './components/Contact';
import Hero from './components/Hero';
import HeroCarousel from './components/HeroCarousel';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import SmoothScroll from './components/SmoothScroll';
import StatPart2 from './components/StatPart2';

import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';


const App = () => {



  return (
    <SmoothScroll>
        <div
  className="
    min-h-screen

    bg-cover
    bg-center
    bg-fixed
    bg-blend-darken
    bg-[url('/src/assets/hero-bg-mobile5.png')]
    md:bg-[url('/src/assets/hero-bg-14.png')]
  "
>

   

  <div className="max-w-[1400px] mx-auto">
    <Navbar />
    <Hero />
    <AboutPart5 />
    <StatPart2 />
    <WhatWeDo />
    <Testimonials />
    <HowItWorks />
    <HeroCarousel />
    <Contact />
    <ScrollToTop />
  </div>
</div>
    </SmoothScroll>
  )
}

export default App;