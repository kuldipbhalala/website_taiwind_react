import React, { useEffect, useState } from 'react'
import SignIn from '../SignIn/SignIn'
import Signup from '../SignIn/Signup'

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false)

    const [credData, setCredData] = useState(() => {
      const storedData = localStorage.getItem('credentialData');
      return storedData ? JSON.parse(storedData) : [];
    });
  
   
    useEffect(() => {
      localStorage.setItem('credentialData', JSON.stringify(credData));
      
      const data = localStorage.getItem("credentialData")
      console.log(data);
    }, [credData]);
  

  return (
<>
{isRegister?<Signup  credData={credData} setCredData={setCredData} isRegister={isRegister} setIsRegister={setIsRegister}/>
:<SignIn credData={credData} setCredData={setCredData} isRegister={isRegister} setIsRegister={setIsRegister} />}
</>
  )
}

export default Auth