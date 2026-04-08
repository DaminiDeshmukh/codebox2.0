"use client"; //added by mini

import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider ,useTheme} from "next-themes"
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { UserDetailContext } from '@/context/UserDetailContext';
import Header from './_components/Header';
function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

const {user}=useUser();
const[userDetail,setUserDetail]=useState();


 

useEffect(()=>{
  
    user && CreateNewUser();
  
},[user])


const CreateNewUser=async()=>{
const result =await axios.post('/api/user',{})
console.log(result);
setUserDetail(result?.data);
}


    // added 
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
  setMounted(true);
   }, []);
  if (!mounted) return null;
 
  return (
   <NextThemesProvider {...props} attribute="class"
  defaultTheme="dark"
  enableSystem
  disableTransitionOnChange>
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      {/* <div className="flex flex-col items-center">
    <Header />
  </div>
  {children} */}

    <Header />

  <div className="w-full">
    {children}
  </div>
    {/* //previously {children} was here */}
    </UserDetailContext.Provider>
    </NextThemesProvider>
  )
}

export default Provider
