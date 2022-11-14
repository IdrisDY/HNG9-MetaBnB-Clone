import React from 'react'
import {images} from './Reusable/nftimages.js'
import settingimg from '../assets/setting-5.svg'
import Nftprop from './Reusable/nftprop.jsx'
import Header from './Reusable/Header.jsx'
export const NftShow = () => {
  return (
    <section className='w-9/10 m-auto  py-5 lg:pt-24'>
    <div className=''> 
    <ul className='md:flex w-full hidden justify-between flex-wrap ' > 
    <li> Restaurants </li>
    <li> Cottage</li>
    <li> Cattle</li>
    <li> Fantast city</li>
    <li> Beach</li>
    <li> Carbins</li>
    <li> Off grid</li>
    <li> Farm</li>
    <li>
    <div className='flex'> <span>Location</span>
    <img src={settingimg} alt='setting icon '/>
    </div>
     </li>

    </ul>
    </div>
    <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
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
