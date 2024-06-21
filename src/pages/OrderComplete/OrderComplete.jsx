import React from 'react'
// import { useNavigate } from 'react-router-dom'

function orderComplete() {
    // const navigate = useNa   vigate()

    return (
        <div>
            <main>
                <section>
                    <div className="container mx-auto">
                        <div className="mx-4 md:hidden">
                            <p className="text-[#605F5F]"> back</p>
                        </div>
                        <div className="py-5">
                            <h1 className="lg:text-[54px] text-[40px] font-[500] text-center py-5 pb-[2.25rem] pt-0">Complete!</h1>
                            <div className="flex justify-center  items-center ">
                                <div className="justify-center items-center pe-[10%] hidden md:flex">
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-[#45B26B] rounded-full flex justify-center items-center">
                                            <img src="/assets/Img/checkLine.png" alt />
                                        </p>
                                    </div>
                                    <div className="px-5">
                                        <p className="font-[600] text-[16px] text-[#45B26B] ">Shopping cart</p>
                                    </div>
                                </div>
                                <div className="justify-center hidden sm:flex items-center pe-[10%] sm:pe-[0%]:">
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-[#45B26B] rounded-full flex justify-center items-center">
                                            <img src="/assets/Img/checkLine.png" alt />
                                        </p>
                                    </div>
                                    <div className="px-5">
                                        <p className="text-[#45B26B] font-medium">Checkout details</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center lg:pe-[10%]">
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-[#000000] rounded-full flex justify-center items-center">
                                            3
                                        </p>
                                    </div>
                                    <div className="px-5  sm:block">
                                        <p className="text-[#000] font-[600]">Order complete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative justify-center hidden md:flex">
                            <span className="absolute w-[60%]  md:w-[25%]  left-[9%]  sm:w-[30%] md:left-[36%]  sm:left-[15%] lg:left-[35%] lg:w-[18%] xl:w-[15%] xl:left-[38%]   2xl:w-[15%] 2xl:left-[38%]  inset-x-0  h-[2px]  bg-[#38CB89]" />
                        </div>
                        <div className="relative justify-center hidden sm:flex">
                            <span className="absolute w-[15%] left-[13%] sm:w-[30%] sm:left-[15%] h-[2px] md:left-[2%] md:w-[23%] lg:w-[18%] lg:left-[7%] xl:left-[13%] xl:w-[14%] 2xl:w-[12%] 2xl:left-[16%]  bg-[#38CB89]" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="absolute w-[55%]  sm:w-[30%] sm:left-[55%] md:w-[25%] lg:w-[18%] lg:left-[65%] md:left-[73%]   left-[16%]  xl:w-[14%] xl:left-[63%] 2xl:w-[15%] 2xl:left-[61%]  inset-x-0  h-[2px] bg-[#000000]" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto py-16 ">
                        <div className="md:mx-auto md:px-4  md:w-[50%] h-[100%] shadow-2xl">
                            <div className="py-5 px-5">
                                <h2 className="text-[#6C7275] text-[28px] font-[500] text-center">Thank You!!</h2>
                                <p className="text-[40px] py-3 text-center text-[500] font-[500]">Your order has been received</p>
                                <div className="flex py-8 justify-center items-center">
                                    <div className="flex relative">
                                        <img src="/assets/Img/black table.png" alt className="w-[80px] h-[96px]" />
                                        <div>
                                            <p className="text-white absolute left-[70%] bottom-[85%]  w-[30px] h-[30px] bg-[#000000] rounded-full flex justify-center items-center">
                                                1
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex relative px-10">
                                        <img src="/assets/Img/Sofia.png" alt className="w-[80px] h-[96px]" />
                                        <div>
                                            <p className="text-white absolute left-[60%] bottom-[85%]  w-[30px] h-[30px] bg-[#000000] rounded-full flex justify-center items-center">
                                                2
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex relative">
                                        <img src="/assets/Img/Lamp.png" alt className="w-[80px] h-[96px]" />
                                        <div>
                                            <p className="text-white absolute left-[70%] bottom-[85%]  w-[30px] h-[30px] bg-[#000000] rounded-full flex justify-center items-center">
                                                3
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:ml-[36%] lg:ml-[20%]">
                                    <div className="flex my-4">
                                        <p className="text-[14px] font-[600] text-[#6C7275]">Order code:</p>
                                        <p className="text-[14px] font-[600] mx-14">#0123_45678</p>
                                    </div>
                                    <div className="flex my-4">
                                        <p className="text-[14px] font-[600] text-[#6C7275]">Date:</p>
                                        <p className="text-[14px] font-[600] ml-[6rem]">October 19, 2023</p>
                                    </div>
                                    <div className="flex my-4">
                                        <p className="text-[14px] font-[600] text-[#6C7275]">Total:</p>
                                        <p className="text-[14px] font-[600] ml-24">$1,345.00</p>
                                    </div>
                                    <div className="flex my-4">
                                        <p className="text-[14px] font-[600] text-[#6C7275]">Payment method:</p>
                                        <p className="text-[14px] font-[600] mx-5">Credit Card</p>
                                    </div>
                                </div>
                                <div className="w-[100%] xl:w-[40%]  lg:w-[50%] block py-4 lg:mx-auto">
                                    {/* <button onClick={() => navigate("/")} className="text-white md:w-[100%] w-[90%] py-3 lg:mx-3 rounded-full bg-black hover:bg-white hover:text-black border-[2px] ">
                                        Place Order
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default orderComplete