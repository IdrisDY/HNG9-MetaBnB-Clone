import React from 'react'
import foxe from '../../assets/image 66.jpg'
import meta from '../../assets/image 69.jpg'
const Modal = ({cancelModal}) => {
   const t = '>'
  return (
    <div className='modal-container fixed  flex '>
    
    <div className='modal-content flex flex-col gap-4 p-5'>
    <div className='flex justify-between under-modal pb-2 '>
    <h3 className='text-xl '> Connect Wallet</h3>
<hr/>
<button onClick={cancelModal}> <span> x </span>
</button>
    </div>
<div className='flex flex-col gap-2'> 
<p className='text-sm md:text-md'>Choose your preferred wallet</p>

<div className='bg-[#F8F9FA] flex gap-2 px-4 py-2 borders items-center' >
<img src={foxe} alt='fox logo'/>
<span> Metamask</span>
<span className='ml-auto'> {t} </span>
 </div>
<div className='bg-[#F8F9FA] flex px-4 py-2 borders gap-4 items-center'><img src={meta} alt='fox logo'/> 
<span> Wallet Connect</span>
<span className='ml-auto'> {t} </span>
</div>
</div>
    </div>
    </div>
  )
}

export default Modal