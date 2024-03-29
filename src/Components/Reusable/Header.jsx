import React, { useState } from 'react'
import headerlogo from '../../assets/header.svg'
import reacte from '../../assets/react.svg'
import menu from '../../assets/outline_menu_black_24dp.png'
import { Link } from 'react-router-dom'
import Modal from './Modal'

let seemodal = false



const Header = () => {

   const [menuClick, setMenuClick] = useState(false)
   const [modalClick, setModalClick] = useState(false)

   function handleMenuClick(e){
      e.target.innerHTML ===''? setMenuClick(true):setMenuClick(false)
     console.log(e.target.innerHTML);
   }
   function showModal (){
      setModalClick (true)
setMenuClick(false)
   }
   
   
   const MobileNav=({style,menuClick})=>{
   
      return(
      <div  className=' hidden flex flex-col text-white align-center justify-center pl-[12%] gap-5 md:pl-[10%] mobilenav' style={style}>
      <button onClick={menuClick} className='text-3xl text-black-900  mr-[50%] space-y-8'> X </button>
      <div className='  flex align-center justify-center px-4'  >
   <ul className='nav-ul flex flex-col gap-6 lg:gap-16 md:gap-7 items-start w-full  '>
    <li className='nav-list whitelinks '><Link to='/'>Home</Link></li>
    <li className='nav-list whitelinks'><Link to='/places'>Place to Stay</Link></li>
    <li className='nav-list whitelinks  '>NFTs</li>
    <li className='nav-list whitelinks cursor-pointer '>Community</li>
   </ul>
   </div>
   <div className='flex'>
   <button onClick={showModal} className=' btnc w-1/2 md:w-1/3 text-[.7rem] mob-btn text-white ml-4 rounded-xl px-5 py-3'>Connect Wallet</button>
   </div>
          {/* {modalClick?<Modal/>:null} */}
   
   </div> 
   
   )}
   
   
  return (
    <nav className='header-nav flex lg:grid gap-4 justify-between lg:fixed lg:bg-white mx-auto w-full px-5 py-3' >
      <div className='flex items-center'>
         <img src={headerlogo} alt='header-logo' className='w-2/3'/>
      </div>
      <div className=' hidden align-center justify-center lg:flex ' >

<ul className='nav-ul flex lg:gap-16 md:gap-7 items-center w-full  '>
   <li className='nav-list links'><Link to='/' >Home</Link></li>
   <li className='nav-list links'><Link to='/places' >Place to Stay</Link></li>
   <li className='nav-list links cursor-pointer'>NFTs</li>
   <li className='nav-list links cursor-pointer'>Community</li>
</ul>
</div>
<div className=' hidden  items-end justify-end lg:flex'>
<button onClick={showModal} className=' btnc wallet-btn px-5 py-2'>Connect Wallet</button>
</div>
      <button onClick={handleMenuClick} >
      <img src={menu} alt='menu button' className='flex lg:hidden' />
      </button> 
       { modalClick?<Modal cancelModal={()=>setModalClick(false)} />:null}
<MobileNav style={{display:menuClick?'flex':'none'}} menuClick={handleMenuClick} />
    </nav>
  )
}

export default Header