import React from 'react'
import {images} from './Reusable/nftimages.js'
import settingimg from '../assets/setting-5.svg'
import Nftprop from './Reusable/nftprop.jsx'
import Header from './Reusable/Header.jsx'
export const NftShow = () => {
  return (
    <section className='w-9/10 m-auto'>
     <Header/> 
    <div> 
    <ul className='flex w-full  justify-between' > 
    <li> Restaurants </li>
    <li> Cottage</li>
    <li> Cattle</li>
    <li> Fantast city</li>
    <li> Beach</li>
    <li> Carbins</li>
    <li> Off grid</li>
    <li> Farm</li>
    <li>
    <div> <span>Location</span>
    <img src={settingimg} alt='setting icon '/>
    </div>
     </li>

    </ul>
    </div>
    <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
{
   images.map((img,index)=>(
      <>
      <Nftprop img={img} />
      </>
   ))

}
</div>
    </section>
  )
}
