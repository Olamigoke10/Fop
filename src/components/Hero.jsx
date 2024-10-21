import React from 'react'
import HeroImg from "../assets/images/bible.jpeg"

const Hero = () => {
  return (
<div className='lg:flex lg:max-w-[1240px] w-full mx-auto text-center mt-5 gap-10'>
  <div className='w-full lg:w-[500px] mx-auto'>
    <h1 className='mb-10 font-extrabold text-4xl lg:text-6xl text-center mx-auto'>
      WELCOME TO FLAMES OF POWER.
    </h1>

    <div className='flex lg:gap-5 gap-2 mx-auto'>
      <div className='hidden lg:block bg-black lg:w-9 w-2'></div>
      <p className='text-sm sm:text-base lg:text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat culpa praesentium eligendi saepe amet esse ut, ea voluptatem debitis aperiam eos asperiores, ad ipsam officia similique.
      </p>
    </div>

    <p className='text-right text-slate-600 font-semibold mt-3'>Romans 5:12</p>
  </div>


  <div className='w-full sm:w-auto mt-5 lg:mt-0'>
    <img src={HeroImg} alt="Bible" className='max-w-full bg-cover lg:w-[580px] rounded-md mx-auto' />
  </div>
</div>


  )
}

export default Hero
