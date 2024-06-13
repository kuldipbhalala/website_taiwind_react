import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

function Footercomponent() {
    const location = useLocation();
    const footerExclude = ["/Signup", "/"]

    return (
        !footerExclude.includes(location.pathname) && <>

            <footer>
                <div className=" bg-[#141718] px-5 py-10 lg:px-[8%]">
                    <div className="text-[#FFF] text-center md:flex md:justify-between md:items-center md:pb-16">
                        <h2 className="mx-5 lg:ms-0 text-2xl md:pb-0  pb-4">3legant.</h2>
                        <div className="border-[1px] cursor-pointer mt mx-auto md:hidden sm:w-[5%] border-[#6C727580] w-[15%]">
                        </div>
                        <p className="text-[#E8ECEF] pb-6 md:pr-[10%]  md:pb-0 lg:pr-[30%] xl:pe-[50%] md:pt-0 pt-6">Gift &amp;
                            Decoration Store</p>
                        <ul className="md:flex  text-[#FFF]">
                            <li className="pb-10 md:pb-0 md:pe-4 cursor-pointer"><NavLink to="/home">Home</NavLink></li>
                            <li className="pb-10 md:pb-0 md:pe-4 cursor-pointer"><NavLink to="/shop">Shop</NavLink></li>
                            <li className="pb-10 md:pb-0 md:pe-4 cursor-pointer"><NavLink to="/product">Product</NavLink></li>
                            <li className="pb-10 md:pb-0 md:pe-4 cursor-pointer"><NavLink to="/blog">Blog</NavLink></li>
                            <li className="pb-10 md:pb-0 md:pe-4 cursor-pointer"><NavLink to="contact">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="border-[1px] cursor-pointer  border-[#6C727580] w-[99%]" />
                    <div className=" md:hidden">
                        <div className="flex justify-center py-7 pb-0">
                            <img src="/assets/Img/instagram.png" alt className="px-4 cursor-pointer " />
                            <img src="/assets/Img/facebook.png" alt className="px-4 cursor-pointer" />
                            <img src="/assets/Img/youtube.png" alt className="px-4 cursor-pointer " />
                        </div>
                    </div>
                    <div className=" py-8 text-center pb-4   md:hidden">
                        <div className="flex justify-center">
                            <p className=" text-[#FEFEFE] pr-6">Privacy Policy</p>
                            <p className="text-[#FEFEFE]">Terms of Use</p>
                        </div>
                        <p className="text-[#E8ECEF] text-[14px] py-6 pb-3 text-center">Copyright © 2023 3legant. All rights
                            reserved</p>
                    </div>
                    <div className="md:flex py-4 hidden ">
                        <p className="text-[#E8ECEF] md:pr-[0]">Copyright © 2023 3legant. All rights reserved</p>
                        <p className="px-7 text-[#FEFEFE]">Privacy Policy</p>
                        <p className="text-[#FEFEFE] pe-[41%] md:pr-[5%] lg:pr-[20%] xl:pe-[42%]">Terms of Use</p>
                        <div className="flex justify-end">
                            <img src="/assets/Img/instagram.png" alt className="px-2 cursor-pointer" />
                            <img src="/assets/Img/facebook.png" alt className="px-2 cursor-pointer" />
                            <img src="/assets/Img/youtube.png" alt className="px-2 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footercomponent