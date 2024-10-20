import React from 'react'
import HeroImg from "../assets/images/bible.jpeg"

const Hero = () => {
  return (
    <div className='flex w-[1240px] mx-auto  items-start mt-5 gap-20 h-vh'>
      <div className='w-[500px]'>
        <h1 className='mb-16 font-extrabold'>WELCOME TO FLAMES OF POWER.</h1>

        <div className='flex gap-5'>
        <div className='bg-black w-9'></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat culpa praesentium 
            eligendi saepe amet esse ut, ea voluptatem debitis aperiam eos asperiores, ad ipsam officia similique consectetu
            eligendi saepe amet esse ut, ea voluptatem debitis aperiam eos asperiores, ad ipsam officia similique consectetu
            </p>
            </div>

      </div>

      <div>
        <img src={HeroImg} alt="" srcset="" className='w-[580px] rounded-md'/>
      </div>


      <hr />
    </div>

  )
}

export default Hero
