import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Cart() {
    const navigate = useNavigate();
    
    const [blackproduct , setBlackProduct] = useState(0)
    const [redproduct , setRedproduct] = useState(0)
    const [blueproduct , setBlueproduct] = useState(0)



    const blackminusPrduct = () => {
        if(blackproduct > 0){
            setBlackProduct( blackproduct - 1)
        }
    }

    const plusblackProduct = () => {
        setBlackProduct(blackproduct + 1)
    }
    
    const minuspPoduct = () => {
        if(redproduct > 0){
            setRedproduct( redproduct - 1)
        }
    }

    const plueredProduct = () => {
        setRedproduct(redproduct + 1)
    }


    const minusblueproduct = () => {
        if(blueproduct > 0){
            setBlueproduct( blueproduct - 1)
        }
}

const plueblueproduct = () => {
    setBlueproduct(blueproduct + 1)
}





    return (
        <div>
            <main>
                <section>
                    <div className="container mx-auto hidden md:block">
                        <div className="py-5">
                            <h1 className="text-[54px] font-[500] text-center py-5 pt-0">Cart</h1>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center pe-[8%]">
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                                            1
                                        </p>
                                    </div>
                                    <div className="px-5 md:px-1">
                                        <p className="font-[600] text-[16px]  ">Shopping cart</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pe-[10%]">
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-[#B1B5C3] rounded-full flex justify-center items-center">
                                            2
                                        </p>
                                    </div>
                                    <div className="px-5 md:px-1">
                                        <p className="text-[#B1B5C3]">Checkout details</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pe-[10%]">
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-[#B1B5C3] rounded-full flex justify-center items-center">
                                            3
                                        </p>
                                    </div>
                                    <div className="px-5 md:px-1">
                                        <p className="text-[#B1B5C3]">Order complete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="absolute w-[15%] md:left-[5%] md:w-[22%] lg:left-[12%] lg:w-[20%]  xl:left-[18%] xl:w-[15%] left-[13%] right-[1%] inset-x-0  h-[2px] bg-black" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto md:hidden">
                        <div>
                            <div className="px-4">
                                <p className="text-[#605F5F] md:hidden"> back </p>
                                <div>
                                    <h2 className="text-[40px] text-center font-[400]">Cart</h2>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <div className="flex justify-center items-center pe-[10%]">
                                        <div>
                                            <p className="text-white w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                                                1
                                            </p>
                                        </div>
                                        <div className="px-5">
                                            <p className="font-[600] text-[16px] ">Shopping cart</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white w-[42px] h-[42px] bg-[#B1B5C3] rounded-full flex justify-center items-center">
                                            2
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-[70%]">
                                <span className="absolute left-[10%] inset-x-0 bottom-[1px] h-[3px] bg-black" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto md:py-10 md:mt-10">
                        <div className="grid lg:grid-cols-[60%_auto]">
                            <div>
                                <div className="justify-between font-[600] items-center pb-5 hidden md:flex">
                                    <p className="pr-[16%] ">Product</p>
                                    <p>Quantity</p>
                                    <p>Price</p>
                                    <p>Subtotal</p>
                                </div>
                                <div className="relative w-[100%]">
                                    <span className="absolute left-[0%] inset-x-0 bottom-[1px] h-[2px] bg-[#E8ECEF]" />
                                </div>
                                <div className="flex justify-between items-center py-5">
                                    <div className="flex">
                                        <div>
                                            <img src="/assets/Img/black table.png" alt className="m-5 ml-0 mt-0" />
                                        </div>
                                        <div>
                                            <p className="font-[600] text-[14px]">Tray Table</p>
                                            <p className="text-[#6C7275] text-[12px] m-2 ml-0">Color: Black</p>
                                            <div className="border-[1px] border-[#6C7275]  md:hidden  rounded-md px-2 flex">
                                                <p>
                                                    <button>-</button>
                                                </p>
                                                <p className="px-2">
                                                </p><p>1</p>
                                                <p />
                                                <p className="px-2">
                                                    <button>+</button>
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <span className="flex text-[#6C7275] font-[600] text-[14px]"> <img src="/assets/Img/Line.png" alt className="cursor-pointer" />
                                                    <p className="hidden md:block">Remove</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex">
                                        <div className="flex border-[1px] border-[#6C7275]  rounded-md px-2">
                                            <p>
                                                <button onClick={blackminusPrduct}>-</button>
                                            </p>
                                            <p className="px-2">
                                            </p><p id="cartvalue1">{blackproduct}</p>
                                            <p />
                                            <p className="px-2">
                                                <button onClick={plusblackProduct}>+</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="pl-12 mb-12 pt-1 md:pl-0 md:mb-0">
                                            <p className="font-[600] mb-1">$19.00</p>
                                            <div className="pl-4 md:hidden">
                                                <span className="flex text-[#6C7275] font-[600] text-[14px]"> <img src="/assets/Img/Line.png" alt className="cursor-pointer" />
                                                    <p className="hidden md:block">Remove</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div>
                                            <p className="font-[600] hidden md:block">$38.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[100%]">
                                    <span className="absolute left-[0%] inset-x-0 bottom-[1px] h-[1px] bg-[#E8ECEF]" />
                                </div>
                                <div className="flex justify-between items-center py-5">
                                    <div className="flex">
                                        <div>
                                            <img src="/assets/Img/Sofia.png" alt className="m-5 ml-0 mt-0" />
                                        </div>
                                        <div>
                                            <p className="font-[600] text-[14px]">Tray Table</p>
                                            <p className="text-[#6C7275] text-[12px] m-2 ml-0">Color: Red</p>
                                            <div className="border-[1px] border-[#6C7275]  md:hidden  rounded-md px-2 flex">
                                                <p>
                                                    <button>-</button>
                                                </p>
                                                <p className="px-2">
                                                </p><p>1</p>
                                                <p />
                                                <p className="px-2">
                                                    <button>+</button>
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <span className="flex text-[#6C7275] font-[600] text-[14px]"> <img src="/assets/Img/Line.png" alt className="cursor-pointer" />
                                                    <p className="hidden md:block">Remove</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex">
                                        <div className="flex border-[1px] border-[#6C7275]  rounded-md px-2">
                                            <p>
                                                <button onClick={minuspPoduct}>-</button>
                                            </p>
                                            <p className="px-2">
                                            </p><p id="cartvalue2">{redproduct}</p>
                                            <p />
                                            <p className="px-2">
                                                <button onClick={plueredProduct}>+</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="pl-12 mb-12 pt-1 md:pl-0 md:mb-0">
                                            <p className="font-[600] mb-1">$19.00</p>
                                            <div className="pl-4 md:hidden">
                                                <span className="flex text-[#6C7275] font-[600] text-[14px]"> <img src="/assets/Img/Line.png" alt className="cursor-pointer" />
                                                    <p className="hidden md:block">Remove</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div>
                                            <p className="font-[600] hidden md:block">$38.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[100%]">
                                    <span className="absolute left-[0%] inset-x-0 bottom-[1px] h-[1px] bg-[#E8ECEF]" />
                                </div>
                                <div className="flex justify-between items-center py-5">
                                    <div className="flex">
                                        <div>
                                            <img src="/assets/Img/black table.png" alt className="m-5 ml-0 mt-0" />
                                        </div>
                                        <div>
                                            <p className="font-[600] text-[14px]">Tray Table</p>
                                            <p className="text-[#6C7275] text-[12px] m-2 ml-0">Color: Black</p>
                                            <div className="border-[1px] border-[#6C7275]  md:hidden  rounded-md px-2 flex">
                                                <p>
                                                    <button>-</button>
                                                </p>
                                                <p className="px-2">
                                                </p><p>1</p>
                                                <p />
                                                <p className="px-2">
                                                    <button>+</button>
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <span className="flex text-[#6C7275] font-[600] text-[14px]"> <img src="/assets/Img/Line.png" alt className="cursor-pointer" />
                                                    <p className="hidden md:block">Remove</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex">
                                        <div className="flex border-[1px] border-[#6C7275]  rounded-md px-2">
                                            <p>
                                                <button onClick={minusblueproduct}>-</button>
                                            </p>
                                            <p className="px-2">
                                            </p><p id="cartvalue3">{blueproduct}</p>
                                            <p />
                                            <p className="px-2">
                                                <button onClick={plueblueproduct}>+</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="pl-12 mb-12 pt-1 md:pl-0 md:mb-0">
                                            <p className="font-[600] mb-1">$19.00</p>
                                            <div className="pl-4 md:hidden">
                                                <span className="flex text-[#6C7275] font-[600] text-[14px]"> <img src="/assets/Img/Line.png" alt className="cursor-pointer" />
                                                    <p className="hidden md:block">Remove</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div>
                                            <p className="font-[600] hidden md:block">$38.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[100%]">
                                    <span className="absolute left-[0%] inset-x-0 bottom-[1px] h-[1px] bg-[#E8ECEF]" />
                                </div>
                            </div>
                            <div className="md:ml-[4.5rem] mr-0 px-4 py-5 md:pt-0">
                                <div className="border-[1px] border-[#6C7275] w-[100%] rounded-md py-5 h-[100%]">
                                    <div className="mx-4 pb-5">
                                        <h2 className="text-[20px] font-[500]">Cart summary</h2>
                                    </div>
                                    <div>
                                        <div className="border-[1px] mx-4 py-2 border-[#6C7275] w-[90%] rounded-md">
                                            <div className="flex items-center space-x-4 px-3 justify-between">
                                                <div className="flex items-center">
                                                    <input id="option1" type="radio" name="option" defaultValue="option1" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                                    <label htmlFor="option1" className="ml-3 block text-sm font-medium text-gray-700">Free
                                                        shipping</label>
                                                </div>
                                                <div>
                                                    <p>$0.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <div className="border-[1px] mx-4 py-2 border-[#6C7275] w-[90%] rounded-md">
                                            <div className="flex items-center space-x-4 px-3 justify-between">
                                                <div className="flex items-center">
                                                    <input id="option1" type="radio" name="option" defaultValue="option1" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                                    <label htmlFor="option1" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Express shipping</label>
                                                </div>
                                                <div>
                                                    <p>+$15.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-[1px] mx-4 py-2 border-[#6C7275] w-[90%] rounded-md">
                                            <div className="flex items-center space-x-4 px-3 justify-between">
                                                <div className="flex items-center">
                                                    <input id="option1" type="radio" name="option" defaultValue="option1" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                                    <label htmlFor="option1" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Pick Up</label>
                                                </div>
                                                <div>
                                                    <p>%21.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-5 py-4">
                                            <div className="flex justify-between">
                                                <p>Subtotal</p>
                                                <p>$1234.00</p>
                                            </div>
                                        </div>
                                        <div className="px-5 py-4">
                                            <div className="flex justify-between">
                                                <p>Total</p>
                                                <p>$1345.00</p>
                                            </div>
                                        </div>
                                        <div className="px-5 py-4">
                                            <button onClick={() => navigate("/checkOut")} className="text-white w-full py-2 rounded-md bg-black ">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto py-12  px-5">
                        <div className="text-[20px] font-[500] pb-1">
                            <h2>Have a coupon?</h2>
                        </div>
                        <div className="text-[#6C7275] text-[16px] pb-2">
                            <p>Add your code for an instant cart discount.</p>
                        </div>
                        <div>
                            <button className="flex justify-between border-[1px] border-[#6C7275] w-[100%] md:w-[30%] px-4 py-2">
                                <div className="flex justify-between">
                                    <img src="/assets/Img/Vector.png" alt className="m-1" />
                                    <p>Coupon Code</p>
                                </div>
                                <p>Apply</p>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Cart