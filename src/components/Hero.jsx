import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'



const Hero = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col text-white px-5">
      <p className='md:mt-30 md:w-[40%] text-[.8rem]'>Bayerische Motoren Werke Aktiengesellschaft, trading as BMW Group, is a German multinational conglomerate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Germany.</p>

      <h1 className='cloudecode py-15 text-5xl font-bold md:py-10 md:text-[7rem]'>CLOUDCO<span className='text-cyan-300'>DE</span></h1>

      <div className='flex items-center justify-left gap-3 mt-5'>
        <button>
            <div className='flex bg-white justify-between items-center gap-5 px-1 py-2 rounded-[2rem] md:items-center md:justify-center'>

                <p className='text-black font-bold text-[.9rem] ml-2.5 md:text-[1.1rem] md:ml-6'>Our Projects</p>
                
                <BsArrowRightCircleFill size={41} color='black' style={{display: 'inline-block', transform: 'rotate(-45deg)'}}/>
                
            </div> 
        </button>

        <div className='w-[.1rem] h-[3.5rem] bg-white'></div>
        <p className='text-neutral-800 font-bold'>Connect With Us</p>

      </div>


    <div className='py-20'>

        <h1 className='text-center py-10 text-xl font-bold'>What our Clients Says</h1>

    <div className='flex flex-col md:flex-row items-center gap-6 justify-center'>

        <div className='flex items-center justify-center gap-5 bg-neutral-600/40 py-5 px-3 rounded-2xl'>
            <img src='img1.jpg' alt='img1' className='w-[5rem] h-[5rem] rounded-[50%]'/>

            <div>
                <h1 className='font-bold text-[1rem]'>Bellamy Blake</h1>
                <p className='text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sit laborum! Itaque dolor harum nemo vitae et numquam obcaecati.</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-5 bg-neutral-600/40 py-5 px-3 rounded-2xl'>
            <img src='img2.jpg' alt='img1' className='w-[5rem] h-[5rem] rounded-[50%]'/>

            <div>
                <h1 className='font-bold text-[1rem]'>Clark Griffin</h1>
                <p className='text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sit laborum! Itaque dolor harum nemo vitae et numquam obcaecati.</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-5 bg-neutral-600/40 py-5 px-3 rounded-2xl'>
            <img src='img3.jpg' alt='img1' className='w-[5rem] h-[5rem] rounded-[50%]'/>

            <div>
                <h1 className='font-bold text-[1rem]'>Raven Rayes</h1>
                <p className='text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sit laborum! Itaque dolor harum nemo vitae et numquam obcaecati.</p>
            </div>
        </div>
    </div>

    </div>


    
    </div>
  )
}

export default Hero