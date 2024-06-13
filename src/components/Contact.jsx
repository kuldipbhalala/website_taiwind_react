import React from 'react'
import { NavLink } from 'react-router-dom'


function Contact() {
    return (
        <div>
            <main>
                <section>
                    <div className="container mx-auto">
                        <div className="flex">
                            <p className="px-1 text-[12px] md:text-[14px] md:px-2 text-[#605F5F] cursor-pointer"><NavLink to="/home">Home</NavLink> &gt; </p>
                            <p className="font-[500] text-[12px] px-2 lg:text-[14px] cursor-pointer">Contact Us</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto">
                        <div className="sm:w-[740px] sm:h-[276px] py-5 ">
                            <div>
                                <h2 className="font-[500] sm:text-[54px] text-[28px] sm:leading-[3.5rem] max-w-[80%] md:max-w-[90%]">We believe in sustainable
                                    decor. We’re passionate about life at
                                    home.</h2>
                                <p className="py-4 text-[16px] font-[400]">Our features timeless furniture, with natural fabrics,
                                    curved lines, plenty of mirrors and
                                    classic design, which can be incorporated into any decor project. The pieces enchant for
                                    their
                                    sobriety, to last for generations, faithful to the shapes of each period, with a touch of
                                    the
                                    present</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto py-8 ">
                        <div className="grid md:grid-cols-2 grid-cols-1 ">
                            <div>
                                <img src="/assets/Img/HUNDREDS.png" alt className="w-[100%]" />
                            </div>
                            <div className="bg-[#F3F5F7] px-[10%] pt-[20%] pb-[20%]">
                                <h2 className="text-[40px] font-[500] my-4">About Us</h2>
                                <p className="text-[16px] font-[400]  max-w-[65%]">3legant is a gift &amp; decorations store based in HCMC,
                                    Vietnam. Est since 2019.
                                </p>
                                <p className='max-w-[65%]'> Our customer service is always prepared to support you 24/7</p>
                                <button className="underline underline-offset-8 font-[500] flex my-7">Shop Now
                                    <svg className="w-4 h-4 ml-2 mt-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="pb-5">
                        <div className="text-center pb-5  text-[20px] md:text-[40px] font-[500]">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="container mx-auto">
                            <div className="grid md:grid-cols-3 gap-[24px] sm:grid-cols-2 grid-cols-1">
                                <div className="bg-[#F3F5F7] text-center pb-4 py-5 mx-5 md:mx-0">
                                    <img src="/assets/Img/Address.png" alt className="mx-auto py-2" />
                                    <div>
                                        <h2 className="text-[#6C7275] text-[16px] font-[700] pb-2">Address</h2>
                                        <p>234 Hai Trieu, Ho Chi Minh City,
                                            Viet Nam</p>
                                    </div>
                                </div>
                                <div className="bg-[#F3F5F7] text-center pb-4 py-5 mx-5 md:mx-0">
                                    <img src="/assets/Img/Contact Us.png" alt className="mx-auto py-2" />
                                    <div>
                                        <h2 className="text-[#6C7275] text-[16px] font-[700] pb-2">Contact Us</h2>
                                        <p>+84 234 567 890</p>
                                    </div>
                                </div>
                                <div className="bg-[#F3F5F7] text-center pb-4 py-5 mx-5 md:mx-0">
                                    <img src="/assets/Img/Email 3legant.png" alt className="mx-auto py-2" />
                                    <div>
                                        <h2 className="text-[#6C7275] text-[16px] font-[700] pb-2">Email</h2>
                                        <p>hello@3legant.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <form className=" bg-white  rounded px-8  mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full-name">
                                        Full Name
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full-name" type="text" placeholder="Full Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={4} placeholder="Your message" defaultValue={""} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-black hover:bg-[#F3F5F7] hover:text-black hover:border-2 border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                            <div className="relative">
                                <img src="/assets/Img/map Image.png" alt className="w-[100%]" />
                                <img src="/assets/Img/location.png" alt className="absolute top-[45%] left-[30%] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className=" grid lg:grid-cols-4 bg-[#F3F5F7] md:grid-cols-2 gap-5  sm:grid-cols-1 grid-cols-1  py-10">
                        <div className="mx-auto bg-[#F3F5F7] grid">
                            <img src="/assets/Img/car.png" alt className="py-5" />
                            <h2 className="font-semibold">Free Shipping</h2>
                            <p>Order above $200</p>
                        </div>
                        <div className=" mx-auto bg-[#F3F5F7]">
                            <img src="/assets/Img/money.png " alt className="py-5" />
                            <h2 className="font-semibold">Money-back</h2>
                            <p>30 days guarantee</p>
                        </div>
                        <div className="mx-auto bg-[#F3F5F7]">
                            <img src="/assets/Img/lok.png" alt className="py-5" />
                            <h2 className="font-semibold">Secure Payments</h2>
                            <p>Secured by Stripe</p>
                        </div>
                        <div className="mx-auto bg-[#F3F5F7]">
                            <img src="/assets/Img/Rectangle 77.png" alt className="py-5" />
                            <h2 className="font-semibold">24/7 Support</h2>
                            <p>Phone and Email support</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Contact