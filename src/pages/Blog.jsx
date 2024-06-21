import React from 'react'
import { NavLink } from 'react-router-dom'



function Blog() {
    return (
        <div>
            <main>
                {/* blog start  */}
                <section>
                    <div className="container mx-auto">
                        <div className="relative">
                            <div className="px-5 md:px-0 sm:hidden">
                                <img src="/assets/Img/blog.png" alt className="w-[311px] h-[308px] bg-[#e3e2e1] opacity-[40]" />
                            </div>
                            <div className="sm:block hidden">
                                <img src="/assets/Img/Blog banner.png" alt className="sm:w-[1120px] opacity-[40] sm:h-[392px] xl:w-[1580px] " />
                            </div>
                            <div className="flex absolute top-[25%] left-[35%] sm:top-[26%] sm:left-[50%] lg:top-[26%] lg:left-[46%] xl:top-[30%] xl:left-[48%]  ">
                                <h2 className="text-[#605F5F] text-[14px] font-[500] pr-2"><NavLink to="/home">Home &gt;</NavLink> </h2>
                                <h2 className="text-[#121212] text-[14px] font-[500]">Blog</h2>
                            </div>
                            <div className="absolute top-[35%] left-[10%] sm:top-[35%] sm:left-[35%] xl:top-[38%] xl:left-[40%]">
                                <h2 className="text-[40px] text-center font-[500] pb-3">Our Blog</h2>
                                <p className="font-[400] text-[16px] text-[#121212] sm:text-[20px]">Home ideas and design
                                    inspiration
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog end  */}
                <section>
                    <div className="container mx-auto">
                        <div className="flex px-5 sm:px-0 sm:block py-6 ">
                            <div className="flex justify-between">
                                <div className="border-2 py-1 px-3 sm:hidden rounded-lg w-[17.5rem] pl-2 border-black flex justify-between">
                                    <p className="sm:block">All Blog</p>
                                    <img src="/assets/Img/Shape.png" alt className="w-[7%] h-[39%] mt-2" />
                                </div>
                                <p className="hidden sm:block">All Blog Featured</p>
                                <div className="hidden sm:flex">
                                    <p>Sort by</p>
                                    <p>icon</p>
                                    <p>icon</p>
                                    <p>icon</p>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto grid px-3 sm:px-0 gap-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            <div className="overflow-hidden">
                                <img src="/assets/Img/home .png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="py-4">
                                    <p className="text-[20px] font-[500] ">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/Kitchen.png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="py-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/bedroom.png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="py-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/bedroom.png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="p-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/home .png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="p-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/Kitchen.png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="p-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/bedroom.png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="p-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/bedroom.png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="p-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/bedroom.png" alt className="pb-2 w-[100%] h-[325px] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="p-4">
                                    <p className="text-[20px] font-[500]">7 ways to decor your home like a professional</p>
                                    <p className="text-[12px] py-2 font-[400] text-[#6C7275]">October 16, 2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 text-center">
                            <button className="py-1 px-9 border-black  border bg-black text-white hover:bg-white hover:text-black rounded-full ">Show
                                more</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto bg-[#F2F4F6]  md:hidden  px-6 py-12">
                        <div className="text-center">
                            <h2 className="text-[28px] font-semibold">Join Our Newsletter</h2>
                            <p className="pb-10">Sign up for deals, new products and promotions</p>
                            <div className="flex justify-between items-center">
                                <div className="flex pb-4">
                                    <img src="/assets/Img/email.png" alt />
                                    <input type="text" name id placeholder="Email address" className="bg-transparent pl-4 outline-none" />
                                </div>
                                <button className="pb-5">Signup</button>
                            </div>
                            <div className="border-2 cursor-pointer border-[#6C727580] " />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="relative hidden md:block">
                        <div className="flex">
                            <div className="w-[100%]">
                                <img src="/assets/Img/bg.png" alt className="w-[100%]" />
                            </div>
                            <div className="absolute top-[30%] md:top-[20%] lg:top-[25%]  lg:left-[33%] left-[30%] xl:left-[40%] items-center flex flex-col">
                                <h1 className="lg:text-[40px] text-3xl font-semibold pb-3 cursor-pointer">Join Our Newsletter</h1>
                                <p className="pb-6 lg:pb-3 lg:text-[18px]">Sign up for deals, new products and promotions</p>
                            </div>
                            <div className="flex absolute top-[75%]  md:top-[67%] lg:top-[65%] lg:left-[35%] xl:top-[55%] xl:left-[41%]  left-[30%]">
                                <img src="/assets/Img/email.png" alt />
                                <input type="text" placeholder="Email address" className="px-6 xl:text-[16px] bg-transparent outline-none" />
                                <button className="text-[#6C7275] xl:text-[16px]">Signup</button>
                            </div>
                        </div>
                        <div className="border-2 cursor-pointer border-[#6C727580] md:top-[85%] lg:left-[35%] absolute lg:top-[80%] xl:left-[41%] top-[95%] xl:top-[65%] w-[40%] lg:w-[30%] xl:w-[18%] left-[30%]"></div>
                    </div>
                </section>
            </main>



        </div>
    )
}

export default Blog