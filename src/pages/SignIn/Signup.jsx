
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup({credData,setCredData ,isRegister, setIsRegister}) {
    const navigate = useNavigate();
    
    const [cred , setCred] = useState([{
        username:"",
        password:"" 
    }])

    return (
        <div>
            <div className="grid md:grid-cols-2">
                <div className="relative">
                    <img src="/assets/Img/chair.png" alt className="w-[100%] h-[100vh] md:w-[85%] md:h-[100vh]" />
                    <h2 className="absolute top-[5%] text-2xl font-semibold left-[35%]">3legant.</h2>
                </div>
                <div className="container py-5 px-5 md:p-10 md:pt-7">
                    <div>
                         <h2  className="text-3xl font-semibold py-4">Sign up</h2>
                        <p  className="text-[#6C7275] ">Already have an account?<span onClick={()=>setIsRegister(false)} className="text-[#38CB89] font-semibold cursor-pointer">Sign in</span> </p>
                    </div>
                    <div className='grid md:grid-cols-2'>
                        {/* <div className="py-4">
                            <p className="text-[#6C7275]">Your name</p>
                            <input type="text" id="username" name="username" className="w-[100%] focus:border-none focus:outline-none" />
                            <div className="border-[1px] cursor-pointer  border-[#E8ECEF] w-[99%] md:w-[50%]" />
                        </div> */}
                        <div className="py-4">
                            <p className="text-[#6C7275]">Username</p>
                            <input type="text" id="username" name="username" 
                            value={cred?.username} 
                            onChange={(e) => setCred(prev => (
                                {
                ...prev,
                username: e.target.value
            }
        ))}
        
        className="w-[100%] focus:border-none focus:outline-none" />
                            <div className="border-[1px] cursor-pointer  border-[#E8ECEF]] w-[99%] md:w-[50%]" />
                        </div>
                        {/* <div className="py-4">
                            <p className="text-[#6C7275]">Email address</p>
                            <input type="text" id="username" name="username" className="w-[100%] focus:border-none focus:outline-none" />
                            <div className="border-[1px] cursor-pointer border-[#E8ECEF]] w-[99%] md:w-[50%]" />
                        </div> */}
                        <div className="py-4">
                            <p className="text-[#6C7275]">Password</p>
                            <input type="password" id="password" name="password"
                             value={cred?.password}
                             onChange={(e) => setCred(prev => (
                                {
                                  ...prev,
                                  password: e.target.value
            }
        ))} 
        className="w-[100%] focus:border-none focus:outline-none" />
                            <div className="border-[1px] cursor-pointer  border-[#E8ECEF]] w-[99%] md:w-[50%]" />
                        </div>
                    </div>
                    <div className="py-4 flex">
                        <input type="checkbox" id="checkbox" name="checkbox" className="w-4 h-5" />
                        <p className="text-[12px] text-[#6C7275] px-2">I agree with <span className="font-semibold text-black">Privacy Policy</span> and <span className="font-semibold text-black">Terms of Use</span></p>
                    </div>
                    <button onClick={() =>   {
                        setCredData((prev)=>([
                        ...prev,
                        {
                            username:cred?.username,
                            password:cred?.password,
                            
                        }
                        
                    ]))
                
                    setIsRegister(false);
                }}  disabled={!cred?.username?.length || !cred?.password?.length  } className="py-2 px-28 rounded-md bg-black text-white" >Sign Up</button>
                </div>
            </div>
        </div>

    )
}

export default Signup