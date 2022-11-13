import React, { useState } from 'react'
import headerlogo from '../../assets/header.svg'
import reacte from '../../assets/react.svg'
import menu from '../../assets/outline_menu_black_24dp.png'

const MobileNav=({style,menuClick})=>(
  <div  className=' hidden flex flex-col text-white align-center justify-center pl-[15%] gap-5 md:pl-[10%] mobilenav' style={style}>
     <button onClick={menuClick} className='text-3xl text-black-900  mr-[50%] space-y-8'> X </button>
     <div className='  flex align-center justify-center'  >
<ul className='nav-ul flex flex-col gap-6 lg:gap-16 md:gap-7 items-start w-full  '>
   <li className='nav-list '>Home</li>
   <li className='nav-list'>Place to Stay</li>
   <li className='nav-list'>NFTs</li>
   <li className='nav-list'>Community</li>
</ul>
</div>
<div className='flex'>
<button className=' md:w-1/3 text-[.7rem] mob-btn text-white ml-4 rounded-xl px-3 py-2'>Connect Wallet</button>
</div>

</div> 
)


const Header = () => {
   const [menuClick, setMenuClick] = useState(false)
   function handleMenuClick(e){
      e.target.innerHTML ===''? setMenuClick(true):setMenuClick(false)
     console.log(e.target.innerHTML);
   }
  return (
    <nav className='header-nav flex lg:grid gap-4 justify-between'>
      <div className='flex items-center'>
         <img src={headerlogo} alt='header-logo' className='w-2/3'/>
      </div>
      <div className=' hidden align-center justify-center lg:flex ' >

<ul className='nav-ul flex lg:gap-16 md:gap-7 items-center w-full  '>
   <li className='nav-list '>Home</li>
   <li className='nav-list'>Place to Stay</li>
   <li className='nav-list'>NFTs</li>
   <li className='nav-list'>Community</li>
</ul>
</div>
<div className=' hidden mx-auto lg:flex'>
<button className='wallet-btn px-5 py-2'>Connect Wallet</button>
</div>
      <button onClick={handleMenuClick} >
      <img src={menu} alt='menu button' className='flex lg:hidden' />
      </button>

<MobileNav style={{display:menuClick?'flex':'none'}} menuClick={handleMenuClick} />
    </nav>
  )
}

export default Header