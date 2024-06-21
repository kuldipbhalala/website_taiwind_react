import React from 'react'
import { useNavigate } from 'react-router-dom'


function CheckOut() {
    const navigate = useNavigate();

    return (
        <div>
            <main>
                <section>
                    <div className="container mx-auto  ">
                        <div className="mx-4 md:hidden">
                            <p className="text-[#605F5F]"> back</p>
                        </div>
                        <div className="py-5">
                            <h1 className="lg:text-[54px] text-[40px] font-[500] text-center py-5 pb-[2.25rem] pt-0">Check Out</h1>
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
                                <div className="flex justify-center items-center pe-[10%]">
                                    <div>
                                        <p className="text-white w-[42px] text-[16px] font-[600] h-[42px] bg-[#000000] rounded-full flex justify-center items-center">
                                            2
                                        </p>
                                    </div>
                                    <div className="px-5">
                                        <p className="text-[#000000] font-medium">Checkout details</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pe-[1%]">
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-[#B1B5C3] rounded-full flex justify-center items-center">
                                            3
                                        </p>
                                    </div>
                                    <div className="px-5 hidden sm:block">
                                        <p className="text-[#B1B5C3]">Order complete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative justify-center hidden md:flex">
                            <span className="absolute w-[15%] left-[13%] h-[2px] md:left-[2%] md:w-[23%] lg:w-[18%] lg:left-[12%] xl:left-[17%] 2xl:w-[12%] 2xl:left-[21%]  bg-[#38CB89]" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="absolute w-[60%]  md:w-[25%]  left-[9%]  sm:w-[30%] md:left-[36%] sm:left-[15%] lg:left-[40%] lg:w-[20%] xl:w-[15%] xl:left-[42%]  2xl:w-[12%] 2xl:left-[43%]  inset-x-0  h-[2px] bg-[#000000]" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto py-10 pb-5">
                        <div className="md:flex  gap-[3%]">
                            <div className="md:w-[60%]">
                                <div className="border-[1px] border-black rounded-md mx-2 px-2 py-5">
                                    <div className="py-3">
                                        <h2 className="md:text-[20px] text-[16px] font-[500]">Contact Infomation</h2>
                                    </div>
                                    <form>
                                        <div className="flex justify-between py-2 items-center">
                                            <div className="px-3">
                                                <label className="block text-[#6C7275]  text-[12px] font-[700] mb-2" htmlFor="firstName">
                                                    First Name
                                                </label>
                                                <input className="w-[136px] lg:w-[220px]  sm:h-[40px]] md:w-[180px] h-[40px]  sm:w-[300px] px-2 py-2 xl:w-[400px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="First name " />
                                            </div>
                                            <div className="py-2">
                                                <label className="block text-[#6C7275] text-[12px] mb-2" htmlFor="firstName">
                                                    Last Name
                                                </label>
                                                <input className="w-[127px] h-[40px] sm:w-[270px] xl:w-[300px] md:w-[200px] md:h-[40px] px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="py-2 px-2">
                                            <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="firstName">
                                                Phone number
                                            </label>
                                            <input className=" w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="Phone number" />
                                        </div>
                                        <div className="py-2 px-2">
                                            <label className="block text-[#6C7275] text-[12px] font-semibold mb-2" htmlFor="firstName">
                                                Email address
                                            </label>
                                            <input className=" w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="Your Email" />
                                        </div>
                                    </form>
                                </div>
                                <div className="py-5">
                                    <div className="border-[1px] border-black mx-2 rounded-md px-2 py-5">
                                        <div className="py-3">
                                            <h2 className="md:text-[20px] font-[500] text-[16px]">Shipping Address</h2>
                                        </div>
                                        <form>
                                            <div className="py-2">
                                                <div>
                                                    <label className=" block text-[#6C7275] text-[12px] uppercase font-semibold mb-2" htmlFor="firstName">
                                                        Street Address *
                                                    </label>
                                                    <input className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder=" Street Address *" />
                                                </div>
                                                <div className="py-2">
                                                    <div className="relative">
                                                        <label className=" block text-[#6C7275] text-[12px] uppercase font-semibold mb-2" htmlFor="firstName">
                                                            Country *
                                                        </label>
                                                        <select className="block appearance-none w-full  bg-white border text-[#6C7275] border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded   focus:outline-none ">
                                                            <option value disabled selected className="uppercase">Select
                                                                Country
                                                            </option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AX">Åland Islands</option>
                                                            <option value="AL">Albania</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <label className="block text-[#6C7275] font-semibold mb-2" htmlFor="firstName">
                                                        Town / City *
                                                    </label>
                                                    <input className=" w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="Town / City" />
                                                </div>
                                                <div className="flex justify-between py-2 items-center">
                                                    <div className="px-3">
                                                        <label className="block text-[#6C7275]  text-[12px] font-[700] mb-2" htmlFor="State">
                                                            State
                                                        </label>
                                                        <input className="w-[136px] lg:w-[220px]  sm:h-[40px]] md:w-[180px] h-[40px]  sm:w-[300px] px-2 py-2 xl:w-[400px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="State" />
                                                    </div>
                                                    <div className="py-2">
                                                        <label className="block text-[#6C7275] text-[12px] mb-2" htmlFor="ZipCode">
                                                            Zip Code
                                                        </label>
                                                        <input className="w-[127px] h-[40px] sm:w-[270px] xl:w-[300px] md:w-[200px] md:h-[40px] px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="Zip Code" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2 py-3">
                                                    <input type="checkbox" id="rememberMe" name="rememberMe" className="h-5 w-10 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                                    <label htmlFor="rememberMe" className="text-[#6C7275] text-[12px] font-[400]">Use a
                                                        different
                                                        billing
                                                        address (optional)</label>
                                                </div>
                                            </div></form>
                                    </div>
                                    <div className="py-5">
                                        <div className="border-[1px] border-black mx-2 rounded-md px-2 py-5">
                                            <div className="py-3">
                                                <h2 className="md:text-[20px]  font-[600] text-[16px]">Payment method</h2>
                                            </div>
                                            <div className="w-full border p-2 rounded">
                                                <div className="flex justify-between items-center space-x-4">
                                                    <div className="flex justify-center">
                                                        <input type="radio" id="option1" name="options" className="h-5 w-5 mx-2 text-black focus:ring-black border-black rounded" />
                                                        <label htmlFor="option1" className="text[#141718] text-[14px] font-[600] ">Pay by
                                                            Card Credit</label>
                                                    </div>
                                                    <div>
                                                        <img src="/assets/Img/Vector.png" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full border p-2 my-4 rounded">
                                                <div className="flex space-x-4">
                                                    <div className="flex justify-center">
                                                        <input type="radio" id="option1" name="options" className="h-5 w-5 mx-2 text-black focus:ring-black border-black rounded" />
                                                        <label htmlFor="option1" className="text[#141718] text-[14px] font-[600] ">Paypal</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <label className="block  text-[#777E90] uppercase text-[12px]  md:text-[14px] font-[700]  mb-2" htmlFor="firstName">
                                                    Card Number
                                                </label>
                                                <input className=" w-[100%] px-4 py-2 rounded-md border font-[600] border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="1234 1234 1234" />
                                            </div>
                                            <div className="flex justify-between py-2 items-center">
                                                <div className="px-3">
                                                    <label className="block text-[#6C7275]  text-[12px] font-[700] mb-2" htmlFor="Expiration date">
                                                        Expiration date
                                                    </label>
                                                    <input className="w-[136px] lg:w-[220px]  sm:h-[40px]] md:w-[180px] h-[40px]  sm:w-[300px] px-2 py-2 xl:w-[400px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="Expiration date" />
                                                </div>
                                                <div className="py-2">
                                                    <label className="block text-[#6C7275] text-[12px] mb-2" htmlFor="CVC">
                                                        CVC
                                                    </label>
                                                    <input className="w-[127px] h-[40px] sm:w-[270px] xl:w-[300px] md:w-[200px] md:h-[40px] px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="CVC" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] py-4 hidden md:block">
                                        <button onClick={() => navigate("/OrderComplete")} className="text-white w-full py-3 rounded-md bg-black ">
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-[1px] mx-2 border-black md:w-[40%] md:h-[40%]">
                                <div>
                                    <h2 className="md:text-[28px] text-[20px] font-[500] pl-5 px-10 py-5">Order summary</h2>
                                </div>
                                <div className="flex justify-between ml-2 py-4 mx-5 gap-[16px]">
                                    <div className="flex">
                                        <div>
                                            <img src="/assets/Img/black table.png" alt className="w-[80px] h-[96px]" />
                                        </div>
                                        <div>
                                            <h2 className="text-[14px] font-[600]">Tray Table</h2>
                                            <p className="text-[#6C7275] py-2">Color: Black</p>
                                            <div className="flex">
                                                <div className="border-[1px] border-black flex justify-between w-[100%] px-2">
                                                    <button>
                                                        -
                                                    </button>
                                                    <p>1</p>
                                                    <button>
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-[600]">$38.00</h2>
                                    </div>
                                </div>
                                <div className="flex justify-between ml-2 py-4 mx-5 gap-[16px]">
                                    <div className="flex">
                                        <div>
                                            <img src="/assets/Img/Sofia.png" alt className="w-[80px] h-[96px]" />
                                        </div>
                                        <div>
                                            <h2 className="text-[14px] font-[600]">Tray Table</h2>
                                            <p className="text-[#6C7275] py-2">Color: Black</p>
                                            <div className="flex">
                                                <div className="border-[1px] border-black flex justify-between w-[100%] px-2">
                                                    <button>
                                                        -
                                                    </button>
                                                    <p>1</p>
                                                    <button>
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-[600]">$38.00</h2>
                                    </div>
                                </div>
                                <div className="flex justify-between ml-2 py-4 mx-5 gap-[16px]">
                                    <div className="flex">
                                        <div>
                                            <img src="/assets/Img/black table.png" alt className="w-[80px] h-[96px]" />
                                        </div>
                                        <div>
                                            <h2 className="text-[14px] font-[600]">Tray Table</h2>
                                            <p className="text-[#6C7275] py-2">Color: Black</p>
                                            <div className="flex">
                                                <div className="border-[1px] border-black flex justify-between w-[100%] px-2">
                                                    <button>
                                                        -
                                                    </button>
                                                    <p>1</p>
                                                    <button>
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-[600]">$38.00</h2>
                                    </div>
                                </div>
                                <div className="mx-5 py-8 md:flex">
                                    <div>
                                        <input className=" w-[60%] md:w-[150px] lg:w-[69%] xl:w-[320px] sm:w-[82%] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" id="firstName" type="text" placeholder="Input" />
                                        <button className="bg-black text-white py-2 px-4 mx-2 rounded">Apply</button>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-0 ml-2 mx-5 py-5 pb-5">
                                    <div className="flex">
                                        <img src="/assets/Img/Vector.png" alt className="px-4 pr-2 lg:pl-0" />
                                        <p className="text-[16px]">JenkateMW</p>
                                    </div>
                                    <div>
                                        <p className="text-[#38CB89] font-[600] text-[16px]">-$25.00 [Remove]</p>
                                    </div>
                                </div>
                                <div className="border-[1px] border-[#E8ECEF] text-center m-auto w-[85%]" />
                                <div className="ml-2 mx-5 py-5 pb-5 xl:mx-6 ">
                                    <div className="flex justify-between">
                                        <p>Shipping</p>
                                        <p className="text-[16px] font-[600]">Free</p>
                                    </div>
                                </div>
                                <div className="border-[1px] border-[#E8ECEF] text-center m-auto w-[85%]" />
                                <div className="ml-2 mx-5 py-5 pb-5 xl:mx-6">
                                    <div className="flex justify-between">
                                        <p className="text-[16px] font-[400]">Subtotal</p>
                                        <p className="text-[16px] font-[600]">$99.00</p>
                                    </div>
                                </div>
                                <div className="border-[1px] border-[#E8ECEF] text-center m-auto w-[85%]" />
                                <div className="ml-2 mx-5 py-5 pb-5 xl:mx-6">
                                    <div className="flex justify-between">
                                        <p className="text-[20px] font-[500]">Total</p>
                                        <p className="text-[16px] font-[600]">$234.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] block py-4  md:hidden">
                                <button className="text-white w-[93%] sm:w-[98%] py-3 mx-3 sm:mx-1 rounded-md bg-black ">
                                    <a href="CheckOut.html">Place Order</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CheckOut