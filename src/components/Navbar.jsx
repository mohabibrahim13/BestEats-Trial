import React , {useState} from 'react'
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag,AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill,BsFillQuestionCircleFill,BsSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaWallet, FaUserFriends} from 'react-icons/fa';
const Navbar = () => {
const[nav, setNav] = useState(false);
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
            <div className='flex items-center'>
                <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30}/>
                </div>
                <h3 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h3>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* Search option */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}/>
                <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Seacrh' />
            </div>
            {/* Cart option */}
            <button className='bg-black text-white hidden md:flex items-center py-2 '>
                <BsFillCartFill size={25} className='mr-2 rounded-full'/> Cart
            </button>
            {/* Mobile view */}
            {/* Overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:''}

            {/* side menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duaration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duaration-300'}>
                <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-3 top-3 cursor-pointer'/>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-3 text-gray-800'>
                        <li className='text-xl p-3 flex '><TbTruckDelivery size={25} className='mr-3'/>Orders</li>
                        <li className='text-xl p-3 flex '><AiFillHeart size={25} className='mr-3'/>Favorites</li>
                        <li className='text-xl p-3 flex '><FaWallet size={25} className='mr-3'/>Wallet</li>
                        <li className='text-xl p-3 flex '><BsFillQuestionCircleFill size={25} className='mr-3'/>Help</li>
                        <li className='text-xl p-3 flex '><AiFillTag size={25} className='mr-3'/>Promotions</li>
                        <li className='text-xl p-3 flex '><BsSaveFill size={25} className='mr-3'/>Best Ones</li>
                        <li className='text-xl p-3 flex '><FaUserFriends size={25} className='mr-3'/>Invite Friend</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar