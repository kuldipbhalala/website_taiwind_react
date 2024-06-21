import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginUrl from '../axios/axios2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignIn({credData,setCredData,isRegister, setIsRegister}) {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
    console.log(password , "password");


    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = localStorage.getItem("credentialData")
           const value = JSON.parse(data)?.filter((data)=>{return data?.username===username &&data?.password===password});

           if (value?.length>0) {
               const token = value?.[0]?.username+value?.[0]?.password;
               localStorage.setItem("token", credData);
               console.log(token , "token");
               navigate("/Home");
            }
            else{
            toast.error("Please valid username password ");
                
            }
        
        } catch (error) {
            toast.error("Please valid username password ");
        }
    };



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                    <img src="/assets/Img/chair.png" alt="Chair" className="w-[100%] h-[100vh] md:w-[85%] md:h-[100vh]" />
                    <h2 className="absolute top-[5%] text-2xl font-semibold left-[35%]">3legant.</h2>
                </div>
                <div className="container py-5 px-5 md:pl-[50px] lg:pt-[8.75rem]">
                    <div>
                        <h2 className="text-3xl font-semibold py-4">Sign In</h2>
                        <p className="text-[#6C7275]">Don’t have an account yet? <span onClick={()=>setIsRegister(true)}  className="text-[#38CB89] font-semibold cursor-pointer">Sign Up</span></p>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        />
                        <div className="py-4">
                            <p className="text-[#6C7275]">Your username or email address</p>
                            <input
                                type="text"
                                value={username}
                                name="username"
                                onChange={handleChange}
                                className="w-[100%] focus:border-none focus:outline-none"
                            />
                            <div className="border-[1px] cursor-pointer border-[#E8ECEF] w-[99%] md:w-[50%]" />
                        </div>
                        <div className="py-4">
                            <p className="text-[#6C7275]">Password</p>
                            <input
                                type="password"
                                value={password}
                                name="password"
                                onChange={handleChange}
                                className="w-[100%] focus:border-none focus:outline-none"
                            />
                            <div className="border-[1px] cursor-pointer border-[#E8ECEF] w-[99%] md:w-[50%]" />
                        </div>

                        <div className="py-4 flex items-center">
                            <input type="checkbox" id="checkbox" name="checkbox" className="w-4 h-5" />
                            <p className="text-[12px] text-[#6C7275] px-2 pe-7 xl:pe-28">Remember me</p>
                            <p><a href="#">Forgot password?</a></p>
                        </div>
                        <button type="submit"    className="py-2 px-[40%] md:px-[32%] lg:px-[22%] rounded-md bg-black text-white">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
