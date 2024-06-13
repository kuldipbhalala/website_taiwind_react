import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import baseUrl from './axios2';
import Star from './Star';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({ rate, reviews }) => {
    const navigate = useNavigate();

    const [product, setProduct] = useState()
    const [currentIndex, setCurrentIndex] = useState(0);



    const getApiData = async () => {
        try {
            const response = await axios.get(`${baseUrl}?limit=5`);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    
    useEffect(() => {
     
       let token =  localStorage.getItem("token")
       if(!token){
            navigate("/");
        }else{
            navigate("/home");
        }
        console.log(token , "token123");
        getApiData();
    }, [])


    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };



    return (
        <div>
            <main>
                <section>
                    <div className="container mx-auto px-5 md:px-0">
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500"
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    <img src="/assets/Img/Paste image.png" alt="image" className="image min-w-[100%]" />
                                    <img src="/assets/Img/Paste image - 2.png" alt="image" className="image min-w-[100%]" />
                                    <img src="/assets/Img/Paste image -3.png" alt="image" className="image min-w-[100%]" />
                                </div>
                            </div>
                            <button onClick={goToPrevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-700 shadow-md hover:bg-gray-100 focus:outline-none">
                                <FaArrowAltCircleLeft className='text-[22px]' />
                            </button>
                            <button onClick={goToNextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-700 shadow-md hover:bg-gray-100 focus:outline-none">
                                <FaArrowAltCircleRight className='text-[22px]' />
                            </button>
                        </div>
                    </div>
                    <div className="container mx-auto lg:flex sm:flex sm:py-5 px-5 md:px-0 py-7 xs:py-5 md:py-5 md:flex  block justify-between ">
                        <h2 className="font-semibold xs:px-5  text-4xl">
                            Simply Unique<span className="text-[#6C7275]">/</span> <br />
                            Simply Better<span className="text-[#6C7275]">.</span> </h2>
                        <p className="font-light sm:break-words py-5 xs:px-5 lg:text-[18px]">
                            <span className="font-semibold">3legant</span>
                            is a gift &amp; decorations store <br />
                            based in HCMC, Vietnam. Est since 2019.
                        </p>
                    </div>
                </section>
                {/* benner end  */}
                {/* product item start  */}
                <section>
                    <div className="container md:flex  mx-auto gap-[50px] px-5 sm:px-0">
                        <div className="flex justify-center relative pb-7 -z-10">
                            <img src="/assets/Img/char image.png" alt className="w-[548px] sm:w-[100%]" />
                            <h1 className="text-3xl absolute z-20 left-[10%] top-[4%] xl:top-[8%]  font-semibold md:top-[4%] ">
                                Living Room</h1>
                            <p className=" absolute flex underline z-20 lg:top-[10%] md:py-3 xl:top-[12%] cursor-pointer font-semibold underline-offset-8 sm:top-[11%] top-[16%] left-[10%]">
                                Shop Now
                                <svg className="w-4 h-4 ml-2 mt-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </p>
                        </div>
                        <div>
                            <div className="relative flex justify-center pb-5 md:pb-5 text-center">
                                <img src="/assets/Img/table.png" alt className="w-[548px] sm:w-[94%] lg:w-[548px]" />
                                <h2 className="absolute font-semibold left-[7%] bottom-[35%] text-2xl lg:bottom-[30%] lg:text-3xl ">
                                    Bedroom
                                </h2>
                                <p className="underline flex absolute z-20 font-semibold cursor-pointer underline-offset-8 left-[7%] bottom-[20%] ">
                                    Shop Now
                                    <svg className="w-4 h-4 ml-2 mt-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </p>
                            </div>
                            <div className="relative flex justify-center pb-5 md:pb-5 text-center">
                                <img src="/assets/Img/Kitchen image.png" alt className="w-[100%] sm:w-[94%] lg:w-[100%]" />
                                <h2 className="absolute font-semibold left-[10%] bottom-[35%] text-2xl lg:bottom-[30%] lg:text-3xl ">
                                    Kitchen
                                </h2>
                                <p className="underline flex absolute z-20 cursor-pointer font-semibold underline-offset-8 left-[10%] bottom-[20%] ">
                                    Shop Now
                                    <svg className="w-4 h-4 ml-2 mt-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product item end  */}
                <section>
                    <div className="container mx-auto px-5 sm:px-0">
                        <div className="flex justify-between items-center py-5">
                            <h2 className="font-[500] text-[34px]">New Arrivals</h2>
                            <div className=" py-4 items-center hidden md:flex">
                                <p className="underline font-semibold underline-offset-8 cursor-pointer">
                                    More Articles </p>
                                <svg className="w-4 h-4 ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>



                        <div className='md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-[5%]'>
                            {
                                product?.map((item, index) => (
                                    <div key={index} className="mx-auto  ">
                                        <div className="relative grid-cols-1 ">
                                            <div className="pb-6">
                                                <img src={item.image} alt className="h-[250px] object-contain aspect-[3/2] w-[100%]" />
                                                <h2 className="absolute font-semibold text-black top-[-0.75rem]   md:top-[1%] px-2 py-1 lg:top-[3%] sm:top-5 xl:top-[-8%] bg-white">
                                                    New</h2>
                                                <p className=" absolute z-20 px-2  font-semibold underline-offset-8  top-[6%] sm:top-[9%] md:top-[12%] xl:top-[1%] md:left-[2%]  sm:left-[5%] text-[#FFF] bg-[#38CB89]">
                                                    -50%</p>
                                            </div>
                                            {/* <button className="absolute z-20 bottom-[25%] md:px-28 lg:px-[21%] xl:bottom-[25%] xl:px-[25%]  md:bottom-[22%] lg:bottom-[30%]  py-2 cursor-pointer px-16 mx-7 text-center font-semibold underline-offset-8 bg-black text-white rounded-lg">
                                            Add to cart
                                        </button> */}
                                            <div className="px-6 ps-0 pb-6">
                                                <div>
                                                    <Star rate={item.rating.rate} reviews={reviews} />
                                                </div>
                                                <h1 className="font-semibold whitespace-normal ">{item.title.slice(0, 20)}...</h1>
                                                <div className="flex">
                                                    <p className="lg:pe-5 font-semibold mr-4">Price :-{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:hidden">
                                            <img src="/assets/Img/pagination.png" alt className="w-[100%] md:w-[95%]" />
                                        </div>
                                        <p className="underline px-6 pl-0 py-6  sm:hidden  font-semibold underline-offset-8 ">More
                                            Products -&gt;</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                {/* service section  */}
                <section>
                    <div className=" container grid lg:grid-cols-4  md:grid-cols-2 gap-5  sm:grid-cols-1 grid-cols-1 mx-auto py-10">
                        <div className="lg:p-10  px-5 bg-[#F3F5F7] grid">
                            <img src="/assets/Img/car.png" alt className="py-5" />
                            <h2 className="font-semibold">Free Shipping</h2>
                            <p>Order above $200</p>
                        </div>
                        <div className="lg:p-10 px-5  bg-[#F3F5F7]">
                            <img src="/assets/Img/car.png " alt className="py-5" />
                            <h2 className="font-semibold">Money-back</h2>
                            <p>30 days guarantee</p>
                        </div>
                        <div className="lg:p-10 px-5 bg-[#F3F5F7]">
                            <img src="/assets/Img/lok.png" alt className="py-5" />
                            <h2 className="font-semibold">Secure Payments</h2>
                            <p>Secured by Stripe</p>
                        </div>
                        <div className="lg:p-10 px-5 bg-[#F3F5F7]">
                            <img src="/assets/Img/Rectangle 77.png" alt className="py-5" />
                            <h2 className="font-semibold">24/7 Support</h2>
                            <p>Phone and Email support</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="lg:flex items-center">
                        <div>
                            <img src="/assets/Img/HUNDREDS.png" alt className="md:w-[100%]" />
                        </div>
                        <div className="lg:px-14 py-10 px-10 sm:px-0 ">
                            <p className="text-[#377DFF]  font-semibold text-2xl pb-4 ">SALE UP TO 35%
                                OFF</p>
                            <h2 className="font-semibold text-2xl">HUNDREDS of
                                New lower prices!</h2>
                            <p className="max-sm:text-1xl">It’s more affordable than ever to give every room in your home a stylish
                                makeover</p>
                            <div className="flex py-4 items-center">
                                <p className="underline font-semibold underline-offset-8 cursor-pointer">
                                    More Articles </p>
                                <svg className="w-4 h-4 ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container  mx-auto py-4 px-4 sm:px-0">
                        <div className="flex justify-between  items-center  py-5">
                            <h2 className="text-2xl font-semibold ">Articles</h2>
                            <div className="flex py-4 items-center">
                                <p className="underline font-semibold underline-offset-8 cursor-pointer">
                                    More Articles </p>
                                <svg className="w-4 h-4 ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 py-7 md:grid-cols-2 cursor-pointer sm:grid-cols-1 grid-cols-1  gap-10">

                            <div className='overflow-hidden'>
                                <img src="/assets/Img/decor.png" alt className="pb-2 w-[100%]  relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="py-5">
                                    <p className="font-semibold">7 ways to decor your home</p>
                                    <p className="underline flex font-semibold underline-offset-8 py-1">
                                        Read More
                                        <svg className="w-4 h-4 ml-2 mt-[5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                            <div className='overflow-hidden'>
                                <img src="/assets/Img/Kitchen.png" alt className="pb-2 w-[100%] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="py-5">
                                    <p className="font-semibold">Kitchen organization</p>
                                    <p className="underline flex font-semibold underline-offset-8 py-1">
                                        Read More
                                        <svg className="w-4 h-4 ml-2 mt-[5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <img src="/assets/Img/bedroom.png" alt className="pb-2 w-[100%] relative z-0  transition-all duration-300 hover:scale-110" />
                                <div className="py-2 cursor-pointer">
                                    <p className="font-semibold">Decor your bedroom</p>
                                    <p className="underline flex font-semibold underline-offset-8 py-1">
                                        Read More
                                        <svg className="w-4 h-4 ml-2 mt-[5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
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
                                <input type="text" placeholder="Email address" className="px-6 xl:text-[16px] bg-transparent outline-none pr-10" />
                                <button className="text-[#6C7275] xl:text-[16px]">Signup</button>
                            </div>
                        </div>
                        <div className="border-2 cursor-pointer border-[#6C727580]  md:top-[85%] lg:left-[35%]  absolute lg:top-[80%] xl:left-[41%] top-[95%] xl:top-[65%] w-[40%] lg:w-[30%] xl:w-[19%] left-[30%]">
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Home;
