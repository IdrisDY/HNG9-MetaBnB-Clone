import React from 'react'
import mockup1 from '../assets/image 7-min.png'
import mockup2 from '../assets/image 8-min.png'
import mockup3 from '../assets/image 9-min.png'

const PurpleMockup = () => {
  return (
    <div className='mockup-section flex flex-col md:grid gap-16 md:gap-8 lg:gap-12  pt-14 md:py-20 md:px-20 purp'>
    <div className='flex flex-col gap-5 items-center md:items-start md:justify-center lg:py-10 lg:gap-12 h-full lg:h-4/5 lg:-translate-y-[10%]'>
    <h2 className='text-white text-4xl  '> MetaBnB NFTs </h2> 
    <p className='text-white text-xl lg:text-xl w-4/5 text-center md:text-left lg:w-4/5'> Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
    <button className='bg-white w-4/5 px-3 py-2 text-fuchsia-700 rounded-md md:w-1/3 md:w-2/3'>Learn More</button>
    </div>
    <div className=' flex flex-col items-center md:items-center pro-img w-2/4 m-auto md:w-full translate-x-4 md:translate-y-16 lg:translate-y-0 content-center h-2/5 lg:h-4/5'> 
   
    <img src={mockup3} alt='mockup image' className='lg:w-3/5 md:w-2/4 w-full h-auto'/>
    <img src={mockup1} alt='mockup image' className='-translate-x-2/4 -translate-y-2/4 md:w-2/4 lg:w-3/5 h-auto' />
    <img src={mockup2} alt='mockup image' className='translate-y-[-150%] translate-x-10 md:w-2/4 lg:w-3/5 h-auto'/>
    </div>
    </div>
  )
}

export default PurpleMockup