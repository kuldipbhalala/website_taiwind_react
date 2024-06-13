import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from './axios2';
import Star from './Star';

function Shop({ rate, reviews }) {
    const [shopProduct, setProduct] = useState([]);
    const [price, setPrice] = useState('All');

    useEffect(() => {
        getshopProduct();
    }, []);

    const getshopProduct = async () => {
        try {
            const getproduct = await axios.get(`${baseUrl}?limit=9`);
            setProduct(getproduct.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filterPriceValue = () => {
        switch (price) {
            case '0-99.99':
                return shopProduct.filter(item => item.price <= 99.99);
            case '100-199.99':
                return shopProduct.filter(item => item.price >= 100 && item.price <= 199.99);
            case '400+':
                return shopProduct.filter(item => item.price >= 400);
            default:
                return shopProduct;

        }
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const filteredProducts = filterPriceValue();

    return (
        <div>
            <main>
                {/* banner start */}
                <div>
                    <div className="container mx-auto">
                        <div className="relative flex justify-center items-center -z-10">
                            <img src="/assets/Img/shop banner.png" alt="" className="md:w-[100%] w-100% h-[40vh] md:h-[60vh]" />
                            <h3 className="absolute text-[13px] cursor-pointer md:top-[27%] xl:text-[18px] md:left-[45%] sm:top-[37%] sm:left-[43%] text-[#605F5F] xl:top-[28%] xl:left-[46%] top-[34%] left-[38%]">Home &gt;</h3>
                            <p className="absolute text-[13px] cursor-pointer md:top-[27%] xl:text-[18px] md:left-[52%] sm:top-[37%] xl:top-[28%] sm:left-[52%] xl:left-[52%] font-medium top-[34%] left-[55%]">Shop</p>
                            <h2 className="absolute lg:top-[35%] md:top-[34%] top-[45%] text-2xl font-semibold lg:text-4xl">Shop Page</h2>
                            <p className="absolute text-[#121212] sm:top-[48%] top-[65%] lg:top-[50%] lg:text-[18px] lg:font-[400] text-[12px]">Let’s design the place you always imagined.</p>
                        </div>
                    </div>
                </div>
                {/* banner end */}

                <section>
                    <div className="container mx-auto pt-7">
                        <div className="grid md:grid-cols-4 md:grid-cols-2 md:gap-[0px] lg:gap-[50px] sm:grid-cols-1 grid-cols-1 justify-between">
                            <div className="hidden md:block">
                                <h2 className="text-[18px] font-semibold pb-5">Filter</h2>
                                <p className="font-semibold pb-2">CATEGORIES</p>
                                <p className="text-[#807E7E] pb-2">All Rooms</p>
                                <p className="font-semibold pb-2">Living Room</p>
                                <p className="text-[#807E7E] pb-2">Bedroom</p>
                                <p className="text-[#807E7E] pb-2">Kitchen</p>
                                <p className="text-[#807E7E] pb-2">Bathroom</p>
                                <p className="text-[#807E7E] pb-2">Dinning</p>
                                <p className="text-[#807E7E] pb-5">Outdoor</p>
                                <h2 className="text-[18px] font-semibold pb-5">PRICE</h2>
                                <div className="w-[254px] h-[222px]">
                                    <p className="text-[#807E7E]">All Price</p>
                                    <div className="filterbutton flex justify-between md:w-[65%] lg:w-[85%] xl:w-full">
                                        <p className="text-[#807E7E]">$All</p>
                                        <input type="radio" value="All" name="radio" className="w-4 h-5" onChange={handlePriceChange} />
                                    </div>
                                    <div className="filterbutton flex justify-between items-center md:w-[65%] lg:w-[85%] xl:w-full">
                                        <p className="text-[#807E7E]">$0.00 -99.99</p>
                                        <input type="radio" value="0-99.99" name="radio" className="w-4 h-5" onChange={handlePriceChange} />
                                    </div>
                                    <div className="flex items-center justify-between md:w-[65%] lg:w-[85%] xl:w-full">
                                        <p className="text-[#807E7E]">$100.00 - 199.99</p>
                                        <input type="radio" value="100-199.99" name="radio" className="w-4 h-5" onChange={handlePriceChange} />
                                    </div>
                                    <div className="flex items-center justify-between md:w-[65%] lg:w-[85%] xl:w-full">
                                        <p className="text-[#807E7E]">$400.00+</p>
                                        <input type="radio" value="400+" name="radio" className="w-4 h-5" onChange={handlePriceChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="flex justify-between">
                                    <div className="font-medium pb-7">Living Room</div>
                                    <button className="font-medium pb-7 cursor-pointer md:hidden">Sort by</button>
                                </div>

                                <div className="md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-[5%]">
                                    {filteredProducts.map((item, index) => (
                                        <div key={index} className="mx-auto">
                                            <div className="relative grid-cols-1">
                                                <div className="pb-6">
                                                    <img src={item.image} alt="" className="h-[250px] object-contain aspect-[3/2] w-[100%]" />
                                                    <h2 className="absolute font-semibold text-black top-[-0.75rem] md:top-[1%] px-2 py-1 lg:top-[3%] sm:top-5 xl:top-[-8%] bg-white">New</h2>
                                                    <p className="absolute z-20 px-2 font-semibold underline-offset-8 top-[6%] sm:top-[9%] md:top-[12%] xl:top-[1%] md:left-[2%] sm:left-[5%] text-[#FFF] bg-[#38CB89]">-50%</p>
                                                </div>
                                                <div className="px-6 ps-0 pb-6">
                                                    <div>
                                                        <Star rate={item.rating.rate} reviews={reviews} />
                                                    </div>
                                                    <h1 className="font-semibold whitespace-normal">{item.title.slice(0, 20)}...</h1>
                                                    <div className="flex">
                                                        <p className="lg:pe-5 font-semibold mr-4">Price: ${item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:hidden">
                                                <img src="/assets/Img/pagination.png" alt="" className="w-[100%] md:w-[95%]" />
                                            </div>
                                            <p className="underline px-6 pl-0 py-6 sm:hidden font-semibold underline-offset-8">More Products -&gt;</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative hidden md:block mt-[10%]">
                        <div className="flex">
                            <div className="w-[100%]">
                                <img src="/assets/Img/bg.png" alt="" className="w-[100%]" />
                            </div>
                            <div className="absolute top-[30%] md:top-[20%] lg:top-[25%] lg:left-[33%] left-[30%] xl:left-[40%] items-center flex flex-col">
                                <h1 className="lg:text-[40px] text-3xl font-semibold pb-3 cursor-pointer">Join Our Newsletter</h1>
                                <p className="pb-6 lg:pb-3 lg:text-[18px]">Sign up for deals, new products and promotions</p>
                            </div>
                            <div className="flex absolute top-[75%] md:top-[67%] lg:top-[65%] lg:left-[35%] xl:top-[55%] xl:left-[41%] left-[30%]">
                                <img src="/assets/Img/email.png" alt="" />
                                <input type="text" placeholder="Email address" className="px-6 xl:text-[16px] bg-transparent outline-none" />
                                <button className="text-[#6C7275] xl:text-[16px]">Signup</button>
                            </div>
                        </div>
                        <div className="border-2 cursor-pointer border-[#6C727580] md:top-[85%] lg:left-[35%] absolute lg:top-[80%] xl:left-[41%] top-[95%] xl:top-[65%] w-[40%] lg:w-[30%] xl:w-[18%] left-[30%]"></div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Shop;
