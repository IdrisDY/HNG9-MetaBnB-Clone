import React from 'react'
import Header from './Reusable/Header'
import home3 from '../assets/main3.png'
import home4 from '../assets/main4.png'
import home5 from '../assets/main5.png'
import home6 from '../assets/main6.png'
import { NftShow } from './NftShow'
import Nftprop from './Reusable/nftprop'
import puplogo1 from '../assets/purologo2.svg'
import puplogo2 from '../assets/purplogo1.svg'
import puplogo3 from '../assets/purplogo3.svg'
import { images } from './Reusable/nftimages'
import PurpleMockup from './purpleMockup'
import Footer from './IdrisFooterComponents/FooterIdris'

export const Homepage = () => {
function reduce(arr){  
 return arr.filter((item,index)=>index<8)
  ;
}
const modArray =  reduce(images);
  return (
    <>
<section className='flex flex-col gap-10 md:gap-20' >

    <section className='home-section w-9/10 m-auto pt-12 gap-16 md:gap-20  lg:gap-36'>
    
    <Header/>

<main className=' flex flex-col md:grid  gap-10 md:gap-20 lg:gap-10 items-center justify-center '>
<div className='flex flex-col maintext gap-5 md:gap-5 lg:gap-8'>
   <h1 className ='  text-center text-3xl md:text-4xl md:text-left lg:w-9/10'>Rent a <span className='span-text-h1'>Place </span>away from <span className='span-text-h1'>Home </span>in the <span className='span-text-h1'>Metaverse</span></h1>
<p className='home-p w-4/5 text-center md:text-left md:w-full lg:max-w-8/10'> we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
<div className='flex flex-col md:w-full md:flex-row lg:max-w-8/10'>
   <input className='  md:w-2/3 home-inp-search p-3 rounded' type='search' placeholder='search for location'/>
   <input className ='  md:w-1/3 p-3  text-white home-btn rounded' type='button' value='Search'/>
</div>
</div>

<div className='flex space-x-5  w-full  justify-center  md:-mb-8 md:self-center lg:-mb-10'>
<div className='space-y-5'>
<img src={home4} alt='nft image 4'/>
<img src={home6} alt='nft image 6'/>
</div>
<div className='space-y-5 mockup-home  '>
<img src={home3} alt='nft image 3'/>
<img src={home5} alt='nft image 5'/>

</div>

</div>
</main>

    </section>
    <section className='mid-logo flex  gap-2 justify-around items-center md:flex-row md py-1 px-3'>  
<div>
  <img src={puplogo2} alt='opera logo' className='w-3/4 m-auto lg:w-full ' />
</div>
<div>  <img src={puplogo3} alt='opera logo' className='w-3/4 m-auto lg:w-full '/>
</div>
<div>  <img src={puplogo1} alt='opera logo' className='w-3/4 m-auto lg:w-full  '/>
</div>
</section>

<section className='w-9/10 gap-5 flex flex-col items-center pb-8 self-center ' >
  <h2 className='text-3xl text-center' > Inspiration for your next adventure</h2>

  <div className='grid  grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full'>
{
   modArray.map((img)=>(
      <>
      <Nftprop img={img} />
      </>
   ))

}
</div>

</section>
      <PurpleMockup/>

    </section>
    <Footer/>
    </>
  )
}
