import React from 'react'
import star from '../../assets/star.svg'

const Nftprop = ({img}) => {
  return (
   <div className='flex flex-col gap-3 nft-box p-4 w-4/5 m-auto md:w-full  '>
   <img src={img} alt={`nft `} className='w-full'/>
<div className='flex justify-between' >
<span> Desert king</span>
<span> 1MBT per night</span>
</div>
<div className='flex justify-between'>
<span>2345km away</span>
<span> away for two weeks</span>
</div>
<div>
<span> <img src={star} alt='stars'/> </span>
</div>

   </div>


    )
}

export default Nftprop