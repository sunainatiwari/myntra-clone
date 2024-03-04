import React from 'react'
import logo from '../images/myntra_logo.webp'
import lens from '../images/search_icon.jpg'
import account from '../images/Account.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div className=' flex font-bold text-sm text-gray-700 items-center p-4 shadow-lg'>
        <img src={logo} alt="" className=' w-20 h-12 ml-5'/>
        <h1 className=' ml-8'>MEN</h1>
        <h1 className=' ml-8'>WOMEN</h1>
        <h1 className=' ml-8'>KIDS</h1>
        <h1 className=' ml-8'>HOME & LIVING</h1>
        <h1 className=' ml-8'>BEAUTY</h1>
        <h1 className=' ml-12'>STUDIO</h1>
        <div className='border border-gray-100 flex items-center bg-gray-100 w-80 h-10 ml-14'>
            <img src={lens} alt="" className=' h-5 w-5 ml-4'/>
            <input type="text" id="first_name" className="bg-gray-50 
             outline-none text-gray-900 text-sm font-normal rounded-lg  ml-3 block w-full p-2.5" placeholder="Search for products" required />
        </div>
        <Link to="/login">
        <div className=' ml-6 text-xs'>
         <img src={account} alt="" className='h-8 w-8'/>
         <h1>LogIn</h1>
        </div>
        </Link>
        <div className=' ml-6 text-xs'>
         <img src={account} alt="" className='h-8 w-8'/>
         <h1>LogOut</h1>
        </div>
     </div>
    </>
  )
}

export default Navbar