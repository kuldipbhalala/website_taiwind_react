import React, { useState, useEffect } from 'react'

function Product() {

    const [coutproduct, setCoutproduct] = useState(0)



    const minusbutton = () => {
        if (coutproduct > 0) {
            setCoutproduct(coutproduct - 1)
        }

    }

    const plusbutton = () => {
        setCoutproduct(coutproduct + 1)
    }

    const calculateTimeLeft = () => {
        const now = new Date();
        const offerEndTime = new Date(now.getTime() + 48 * 60 * 60 * 1000);
        const difference = offerEndTime - now;

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [offerEndTime] = useState(new Date(new Date().getTime() + 48 * 60 * 60 * 1000));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(() => {
                const now = new Date();
                const difference = offerEndTime - now;

                let timeLeft = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };

                if (difference > 0) {
                    timeLeft = {
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / (1000 * 60)) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                    };
                }

                return timeLeft;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [offerEndTime]);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div>
            <main>
                <div className="container mx-auto">
                    <div className="sm:flex">
                        <div className="relative px-3 py-3 -z-10">
                            <img src="/assets/Img/Black Tray table.png" alt className="w-[311px]  h-[414px]  lg:w-[548px] lg:h-[729px]" />
                            <h2 className="absolute font-semibold md:text-[18px] text-black top-8 left-10 lg:top-10 lg:left-10 px-2  bg-slate-200">
                                New
                            </h2>
                            <p className=" absolute z-20 md:text-[18px] font-semibold underline-offset-8 px-2  top-16 left-10 lg:top-[8%] lg:left-10  text-[#FFF] bg-[#38CB89]">
                                50%</p>
                            <div className="hidden  md:flex gap-[24px] py-5 ">
                                <img src="/assets/Img/Product Image .png" alt className="w-[24%]   sm:w-[15%]   lg:w-[150px] md:w-[80px] xl:w-[167px]" />
                                <img src="/assets/Img/product Image 2.png" alt className="w-[24%]  sm:w-[15%]   lg:w-[150px]  md:w-[80px] xl:w-[167px]" />
                                <img src="/assets/Img/product 3Image.png" alt className="w-[24%]   sm:w-[15%]   lg:w-[150px] md:w-[80px] xl:w-[167px]" />
                            </div>
                        </div>
                        <div className="px-5 pt-2 gap-[10px] py-4 sm:w-[360px] sm:h-[986px] md:w-[465px] md:h-[986px] ">
                            <div className="flex items-center">
                                <img src="/assets/Img/Rating Group.png" alt className="w[88px] h-[16px] pr-2" />
                                <p className="lg:text[12px]">11 Reviews</p>
                            </div>
                            <div className="pb-3">
                                <h2 className="text-[40px] font-semibold ">Tray Table</h2>
                                <p className="text-[#6C7275] ">Buy one or buy a few and make every space where you sit more
                                    convenient. Light and easy to move around with removable tray top, handy for serving
                                    snacks.</p>
                            </div>
                            <div className="flex items-center gap-[24px]">
                                <h2 className="text-[28px]">$199.00</h2>
                                <del className=" text-[#6C7275] text-[20px]">$400.00</del>
                            </div>
                            <div className="py-4  gap-[8px]">
                                <p className="text-[16px]">Offer expires in:</p>
                                <div className="flex py-3">
                                    <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-1">
                                        {days < 10 ? `0${days}` : days}
                                    </p>
                                    <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-3">
                                        {hours < 10 ? `0${hours}` : hours}
                                    </p>
                                    <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-3">
                                        {minutes < 10 ? `0${minutes}` : minutes}
                                    </p>
                                    <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-3">
                                        {seconds < 10 ? `0${seconds}` : seconds}
                                    </p>
                                </div>
                                <div className="flex text-[#6C7275] pb-8 ">
                                    <p className=" text-[12px]  text-center ml-2 lg:ml-2 lg:mx-5">Days</p>
                                    <p className=" text-[12px] text-center mx-10 lg:mx-10">Hours</p>
                                    <p className=" text-[12px] text-center mx-0 lg:ml-0 lg:mx-5">Minutes</p>
                                    <p className=" text-[12px] text-center mx-8 lg:mx-5">Seconds</p>
                                </div>
                                <div className="pb-5 xl:pb-0">
                                    <p className="border-[1px]  md:mb-8 md:my-4 xl:mb-8 lg:my-4  border-[#E8ECEF] w-[99%]" />
                                </div>
                                <div>
                                    <p className="text-[#6C7275] text-[16px] font-medium pb-3">Measurements</p>
                                    <p className="text-[20px] pb-4">17 1/2x20 5/8 "</p>
                                    <p className="16px font-medium text-[#6C7275] pb-4">Choose Color &gt;</p>
                                    <p className="text-[20px] text-[400] pb-4">Black</p>
                                    <div className="flex items-center justify-start mx-0 py-3">
                                        <img src="/assets/Img/black table.png" alt className="w-[72px]" />
                                        <img src="/assets/Img/blue .png" alt className="w-[72px]" />
                                        <img src="/assets/Img/red table.png" alt className="w-[72px]" />
                                        <img src="/assets/Img/black table.png" alt className="w-[72px]" />
                                    </div>
                                    <div className="py-5 flex gap-[20px]">
                                        <div className="bg-[#f3f5f7] w-[127px] h-[52px]">
                                            <div className="px-1 py-1 text-center">
                                                <div className="text-black flex mt-2 justify-center ">
                                                    <button onClick={minusbutton}>-</button>
                                                    <p id="cartvalue1" className="ms-4">{coutproduct}</p>
                                                    <button onClick={plusbutton} className="ms-4" onclick="UpdateValue(1,1)">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:px-16 md:py-1 px-12  lg:w-[375px] cursor-pointer lg:h-[52px] rounded-[8px] border-[1px] flex justify-center items-center border-black">
                                            <p className="text-[18px] "> Wishlist</p>
                                        </div>
                                    </div>
                                    <div className="w-[280px] h-[40px] md:w-[385px] md:h-[52px] flex justify-center cursor-pointer items-center text-[white] rounded-[8px] gap-[8px] bg-[#141718]">
                                        <a href="Cart.html"> Add to Cart</a>
                                    </div>
                                    <div className="border-[1px] cursor-pointer my-8 border-[#E8ECEF] w-[99%]" />
                                    <div className="lg:w-[450px] lg:h-[96px]">
                                        <div className="flex gap-[98px] w-[147px] h-[20px]">
                                            <p className="text-[#6C7275] text-[12px]">SKU</p>
                                            <p className="text-[12px]">1117</p>
                                        </div>
                                        <div className="flex w-[251px] h-[20px] gap-[58px]">
                                            <p className=" text-[#6C7275] text-[12px]">CATEGORY</p>
                                            <p className="text-[12px]">Living Room, Bedroom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="px-4 md:py-10 gap-[40px] md:flex  md:h-[32px] md:gap-[80px] text-[18px]">
                        <div className="border-[1px] cursor-pointer md:hidden border-[#00000080] w-[99%]" />
                        <div className="border-[1px] cursor-pointer md:hidden border-[#00000080] w-[99%]" />
                        <p className="md:underline md:underline-offset-8 font-medium">Reviews</p>
                        <div className="border-[1px] cursor-pointer md:hidden border-[#00000080] w-[99%]" />
                    </div>
                    <div className="border-b-[1px] border-[#E8ECEF] " />
                    <div>
                        <div className="gap-[24px] px-4 pt-5">
                            <h2 className="text-[20px]  md:text-[28px] font-medium">Customer Reviews</h2>
                            <div className="flex pt-8 items-center">
                                <img src="/assets/Img/Rating group2.png" alt />
                                <p className="text-[12px]">11 Reviews</p>
                            </div>
                            <p className="text-[16px] pl-[10rem] font-medium">Tray Table</p>
                        </div>
                        <div className="pt-8">
                            <div className=" border-2 border-[#E8ECEF] rounded-lg flex justify-between  items-center h-[72px] px-2  py-5">
                                <input type="text" placeholder className='w-full outline-none p-3' />
                                <div className="w-[35px] h-[35px]  md:w-[176px] flex justify-center cursor-pointer items-center rounded-full md:h-[40px] gap-8 bg-black text-white">
                                    <img src="/assets/Img/vector (Stroke).png" alt className="md:hidden" />
                                    <p className="hidden md:block">Write Review</p>
                                </div>
                            </div>
                        </div>
                        <div className="container pb-10 mx-auto pt-10 md:flex md:justify-between md:items-center">
                            <h1 className="text-[28px] pb-6 font-bold">11 Reviews</h1>
                            <button className=" w-[100%] md:w-[17%] py-2 px-5  flex justify-between items-center font-semibold   text-[16px] border-2 border-[#E8ECEF] ">
                                Newest
                                <img src="/assets/Img/Shape.png" alt />
                            </button>
                        </div>
                        <div>
                            <div className="flex  gap-[25px]">
                                <div>
                                    <img src="/assets/Img/avatar_placeholder.png" alt className="w-[400px] h-[50px] sm:w-[150px] lg:w-[115px] lg:h-[63px]" />
                                </div>
                                <div>
                                    <p className="text-[20px] py-3 pt-0 font-semibold">Sofia Harvetz</p>
                                    <img src="/assets/Img//Rating Group.png" alt className="py-2" />
                                    <p className="text-[#353945] text-[16px]">I bought it 3 weeks ago and now come back just to say
                                        “Awesome Product”. I really enjoy it.
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                    <div className="flex text-[12px] font-semibold gap-[12px] py-3">
                                        <h2>Like</h2>
                                        <p>Reply</p>
                                    </div>
                                    <div className="w-[100%] my-7 border-b-2 border-[#E8ECEF]">
                                    </div>
                                </div>
                            </div>
                            <div className="flex  gap-[25px]">
                                <div>
                                    <img src="/assets/Img/Nicolas.png" alt className="w-[400px] h-[50px] sm:w-[150px] lg:w-[115px] lg:h-[63px]" />
                                </div>
                                <div>
                                    <p className="text-[20px] py-3 pt-0 font-semibold">Sofia Harvetz</p>
                                    <img src="/assets/Img//Rating Group.png" alt className="py-2" />
                                    <p className="text-[#353945] text-[16px]">I bought it 3 weeks ago and now come back just to say
                                        “Awesome Product”. I really enjoy it.
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                    <div className="flex text-[12px] font-semibold gap-[12px] py-3">
                                        <h2>Like</h2>
                                        <p>Reply</p>
                                    </div>
                                    <div className="w-[100%] my-7 border-b-2 border-[#E8ECEF]">
                                    </div>
                                </div>
                            </div>
                            <div className="flex  gap-[25px]">
                                <div>
                                    <img src="/assets/Img/Jensen.png" alt className="w-[400px] h-[50px] sm:w-[150px] lg:w-[115px] lg:h-[63px]" />
                                </div>
                                <div>
                                    <p className="text-[20px] py-3 pt-0 font-semibold">Sofia Harvetz</p>
                                    <img src="/assets/Img//Rating Group.png" alt className="py-2" />
                                    <p className="text-[#353945] text-[16px]">I bought it 3 weeks ago and now come back just to say
                                        “Awesome Product”. I really enjoy it.
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                    <div className="flex text-[12px] font-semibold gap-[12px] py-3">
                                        <h2>Like</h2>
                                        <p>Reply</p>
                                    </div>
                                    <div className="w-[100%] my-7 border-b-2 border-[#E8ECEF]">
                                    </div>
                                </div>
                            </div>
                            <div className="flex  gap-[25px]">
                                <div>
                                    <img src="/assets/Img/Awesome.png" alt className="w-[400px] h-[50px] sm:w-[150px] lg:w-[115px] lg:h-[63px]" />
                                </div>
                                <div>
                                    <p className="text-[20px] py-3 pt-0 font-semibold">Sofia Harvetz</p>
                                    <img src="/assets/Img//Rating Group.png" alt className="py-2" />
                                    <p className="text-[#353945] text-[16px]">I bought it 3 weeks ago and now come back just to say
                                        “Awesome Product”. I really enjoy it.
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                    <div className="flex text-[12px] font-semibold gap-[12px] py-3">
                                        <h2>Like</h2>
                                        <p>Reply</p>
                                    </div>
                                    <div className="w-[100%] my-7 border-b-2 border-[#E8ECEF]">
                                    </div>
                                </div>
                            </div>
                            <div className="flex  gap-[25px]">
                                <div>
                                    <img src="/assets/Img/Nicolas.png" alt className="w-[400px] h-[50px] sm:w-[150px] lg:w-[115px] lg:h-[63px]" />
                                </div>
                                <div>
                                    <p className="text-[20px] py-3 pt-0 font-semibold">Sofia Harvetz</p>
                                    <img src="/assets/Img//Rating Group.png" alt className="py-2" />
                                    <p className="text-[#353945] text-[16px]">I bought it 3 weeks ago and now come back just to say
                                        “Awesome Product”. I really enjoy it.
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                    <div className="flex text-[12px] font-semibold gap-[12px] py-3">
                                        <h2>Like</h2>
                                        <p>Reply</p>
                                    </div>
                                    <div className="w-[100%] mt-7 border-b-2 border-[#E8ECEF]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 text-center">
                        <button className="py-1 px-9 border-black  border hover:bg-black hover:text-white rounded-full ">
                            <a href="CheckOut.html">Show more</a></button>
                    </div>
                </div>

                <div>
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
                            <div className="border-2 cursor-pointer border-[#6C727580]  md:top-[85%] lg:left-[35%]  absolute lg:top-[80%] xl:left-[41%] top-[95%] xl:top-[65%] w-[40%] lg:w-[30%] xl:w-[20%] left-[30%]">
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Product