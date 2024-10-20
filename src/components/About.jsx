import React from 'react'
import HeroImg from "../assets/images/bible.jpeg"

const About = () => {
  return (
    <div className='w-[1240px] mx-auto my-9'>
      <div className='my-5'>
        <h2 className='font-bold text-3xl'>About</h2>
      </div>

    <div className='flex gap-4'>
      <div className='flex w-[600px]'>
        <img src={HeroImg} alt="" srcset="" className='w-[120px] rounded-md' />

        <div className='mx-3'>
            <h2 className='font-extrabold'>OUR FELLOWSHIP</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quasi, illo magni. Nisi illo omnis, eveniet nostrum soluta distinctio suscipit velit.</p>
        </div>
      </div>

      <div className='flex w-[600px]'>
        <img src={HeroImg} alt="" srcset="" className='w-[120px] rounded-md' />

        <div className='mx-3'>
            <h2 className='font-extrabold'>OUR PURPOSE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quasi, illo magni. Nisi illo omnis, eveniet nostrum soluta distinctio suscipit velit.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
