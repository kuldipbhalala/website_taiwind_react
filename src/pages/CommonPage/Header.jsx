import React, { useState , useEffect } from 'react';
import { NavLink, Router, useLocation, useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CgShoppingBag } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";


const Header = () => {
    const [click, setClick] = useState(false)
const location=useLocation();

    const handelclick = () => {
        let token =  localStorage.removeItem("token")  
    }

    useEffect(() => {
     
           let token =  localStorage.getItem("token")
           if(!token){
                navigate("/");
            }else{
                const newPath=location.pathname==="/"?"/home":location.pathname
                navigate(newPath);
            }
        }, [])
    

    const navigate = useNavigate();
    const headerExclude = ["/Signup", "/"]



    const toggleMenu = () => setClick(!click);

    return (

        !headerExclude.includes(location.pathname) && 
        <>
            {/* 30% off storewide — Limited time!   */}
            <div className=" flex justify-center bg-[#F3F5F7]  items-center py-2 cursor-pointer relative">
                <div className="mx-3">
                    <img src="/assets/Img/Vector.png" alt="" className="w-5" />
                </div>
                <div className="font-medium me-4">
                    <p className="text-[12px] lg:text-[20px] md:text-[16px] sm:-text-[14px] xs:text-[10px]">30% off storewide —
                        Limited time!
                    </p>
                </div>

                <button className=" underline  underline-offset-8 text-[#377DFF] hidden sm:hidden md:flex ">
                    Shop Now
                    <svg className="w-4 h-4 ml-2 mt-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                        </path>
                    </svg>
                </button>


                <div className="flex justify-end absolute right-5">
                    <button className=" xs:text-[12px] lg:text-[20px]">
                        <img src="/assets/Img/close.png" alt="" />
                    </button>
                </div>
            </div>



           {
           

        <header>
        <div className='container mx-auto py-3'>
            <div className='flex justify-between items-center'>
                <div className='mx-4 md:mx-0'>
                    <h1 className='font-[500] text-[24px]'>3legant.</h1>
                </div>
                <nav>
                    <ul className='hidden md:flex'>
                        <li className='mx-6 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/home" className={({ isActive }) => isActive ? "font-bold" : " "}> Home</NavLink></li>
                        <li className='mx-6 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/shop" className={({ isActive }) => isActive ? "font-bold" : " "}> Shop</NavLink></li>
                        <li className='mx-6 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/product" className={({ isActive }) => isActive ? "font-bold" : " "}> Product</NavLink></li>
                        <li className='mx-6 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/blog" className={({ isActive }) => isActive ? "font-bold" : " "}>Blog</NavLink></li>
                        <li className='mx-6 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : " "}>Contact Us</NavLink> </li>
                    </ul>
                </nav>
                <div className='flex items-center'>
                    <IoSearchSharp className='mx-2 text-[25px] cursor-pointer hidden md:block' />
                    <NavLink to='/MyAccount' > <CgProfile className='mx-3 text-[25px] cursor-pointer hidden md:block' /></NavLink>
                    <NavLink to='/Cart'><CgShoppingBag className='mx- text-[25px] cursor-pointer  hidden md:block mr-5' /></NavLink>
                    <div className='md:hidden mx-5' onClick={toggleMenu}>
                        {click ? <IoClose className='text-[25px]' /> : <GiHamburgerMenu className='text-[25px]' />}
                    </div>
                    <div className='hidden md:flex justify-between my-1 mb-[8%]'>
                <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline" type="button">
                <NavLink onClick={handelclick} to='/' > Log Out</NavLink>
                </button>
                </div>
                </div>
            </div>
        </div>
        </header>

           }

            {click ?

                <div className='h-[100vh] md:hidden'>
                    <div className='flex border-[2px]  mx-5 border-[#6C7275] rounded-lg md:hidden py-2 mb-5 mt-2'>
                        <IoSearchSharp className='mx-3 text-[25px] cursor-pointer  md:hidden' />
                        <input type="text" placeholder='Search' className='outline-none' />
                    </div>
                    <nav>
                        <ul className='z-10 md:hidden mb-[20%] '>
                            <li className='mx-5 my-3 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/home" className={({ isActive }) => isActive ? "font-bold" : " "}> Home</NavLink></li>
                            <li className='mx-5 my-3 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/shop" className={({ isActive }) => isActive ? "font-bold" : " "}> Shop</NavLink></li>
                            <li className='mx-5 my-3 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/product" className={({ isActive }) => isActive ? "font-bold" : " "}> Product</NavLink></li>
                            <li className='mx-5 my-3 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/blog" className={({ isActive }) => isActive ? "font-bold" : " "}>Blog</NavLink></li>
                            <li className='mx-5 my-3 font-[400] text-[#6C7275] cursor-pointer'> <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : " "}>Contact Us</NavLink> </li>
                        </ul>
                    </nav>
                    <div className='mx-5'>
                        <div className='flex justify-between'>
                            <p className='text-[18px] font-[500] text-[#6C7275]'>Cart</p>
                            <NavLink to='/Cart'><CgShoppingBag className='mx- text-[25px] cursor-pointer  md:hidden' /></NavLink>
                        </div>
                        <div className='flex justify-between my-1 mb-[8%]'>
                            <p className='text-[18px] font-[500] my-2 text-[#6C7275]'>Wishlist</p>
                            <NavLink to='/Cart'><FaRegHeart className='mx- text-[25px] cursor-pointer my-2  md:hidden' /></NavLink>
                        </div>
                      
                        <div className='flex md:hidden justify-between my-1 mb-[8%]'>
                        <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline" type="button">
                                Log Out
                        </button>
                        </div>
                    </div>
                </div>

                :

                ""
            }


        </>
    )
}

export default Header
