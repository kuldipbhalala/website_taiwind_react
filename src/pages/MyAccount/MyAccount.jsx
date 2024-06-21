import React from 'react'
import { NavLink } from 'react-router-dom'


function MyAccount() {

    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-center items-center py-5">
                    <h2 className="text-[40px]  lg:text-[54px] font-[500]">My Account</h2>
                </div>
            </div>
            <div className="container mx-auto mb-10">
                <div className="md:flex gap-[7px]">
                    <div className="bg-[#F3F5F7] w-[100%] md:w-[262px] h-[430px]">
                        <div className="flex justify-center my-10">
                            <div className="relative">
                                <img src="/assets/Img/avatar_placeholder.png" alt className="mx-5" />
                                <p className="text-[20px] font-[600] my-2">Sofia Havertz</p>
                                <div className="absolute top-[35%] left-[55%]">
                                    <input
                                        type="file"
                                        id="myfile"
                                        name="myfile"
                                        onChange={handleFileChange}
                                        className='hidden'
                                    />
                                    <label htmlFor="myfile" className="custom-file-upload">
                                        <img src="/assets/img/Icon Box.png" alt="Upload Icon" className="upload-icon cursor-pointer" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mx-5">
                            <h2 className="text-[16px] font-[600] hidden md:block">Account</h2>
                            <div className="border-[1px] border-black hidden md:block" />
                            <div className="border-[2px] border-[#6C7275] rounded-md md:hidden py-2 px-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[16px] font-[600]">Account</h2>
                                    <img src="/assets/Img/Shape.png" alt className="w-3 h-2" />
                                </div>
                            </div>
                            <div>
                                <p className="my-4 text-[#6C7275] font-[600]">Address</p>
                                <p className="my-4 text-[#6C7275] font-[600]">Orders</p>
                                <p className="my-4 text-[#6C7275] font-[600]">Wishlist</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-10 mt-10">
                        <form className="w-full max-w-lg">
                            <div className="mb-4">
                                <h2 className="font-[600] pb-5 text-[20px]">Account Details</h2>
                                <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="first_name">
                                    First Name *
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="First Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="last_name">
                                    Last Name *
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" placeholder="Last Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="display_name">
                                    Display Name *
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="display_name" type="text" placeholder="Display Name" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="email">
                                    Email *
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                            </div>
                            <div className="my-5">
                                <h2 className="text-[20px] font-[600]">Password</h2>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="old_password">
                                    Old Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="old_password" type="password" placeholder="Old Password" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="new_password">
                                    New Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="new_password" type="password" placeholder="New Password" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#6C7275] text-[12px] font-[700] mb-2" htmlFor="repeat_password">
                                    Repeat New Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#6C7275] text-[12px] font-[700] leading-tight focus:outline-none focus:shadow-outline" id="repeat_password" type="password" placeholder="Repeat New Password" />
                            </div>
                            <div className="flex items-center justify-between my-5">
                                <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    <NavLink> Save changes</NavLink>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount