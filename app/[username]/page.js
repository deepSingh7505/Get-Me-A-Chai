"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Router, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const Username = ({ params }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [profile, setprofile] = useState("banner/profile.png")
  const { username } = React.use(params);

  useEffect(() => {
    if (session) {
      setprofile(session.user.image)
      console.log(session);
    }
  }, [session])
  return (
    <>
      <main className='flex-1'>
        <div className='w-full relative'>
          <img className='w-full max-h-[min(400px,50vh)]  object-fit' src="banner/cfw.jpg" alt="" />
          <div className='border-2 border-black rounded-full absolute bottom-[-50] left-[46%]'>
            <img width={100} height={100} className=' rounded-full' src={profile} alt="" />
          </div>
        </div>
        <div className='info flex flex-col items-center gap-4 p-13.75 bg-[#00091D]'>

        <div className='font-bold text-3xl'>JB2A - Jules&Ben's Animated Assets
        </div>

        <div>Creating Animated art for VTT's
        </div>
  
        <div>25,556 members &bull; 110 posts &bull; $17,550/release</div>
        <div className='paymet flex w-[80%] gap-4'>
          <div className='supporters  w-1/2 bg-slate-700 p-4 rounded-xl  overflow-auto max-h-[342px]'>
            <h1 className='font-bold text-2xl'>Supporters - </h1>
            <ul className=' flex flex-col gap-2 mt-3 '>
              <li className='border border-slate-500 py-2 rounded-xl px-2'>DeepSingh donated 1000$ and say "good luck"</li>
              <li className='border border-slate-500 py-2 rounded-xl px-2'>DeepSingh donated 1000$ and say "good luck"</li>
              <li className='border border-slate-500 py-2 rounded-xl px-2'>DeepSingh donated 1000$ and say "good luck"</li>
              <li className='border border-slate-500 py-2 rounded-xl px-2'>DeepSingh donated 1000$ and say "good luck"</li>
              <li className='border border-slate-500 py-2 rounded-xl px-2'>DeepSingh donated 1000$ and say "good luck"</li>
              <li className='border border-slate-500 py-2 rounded-xl px-2'>DeepSingh donated 1000$ and say "good luck"</li>
            </ul>
          </div>
          <div className='make payment  w-1/2 bg-slate-700 p-4 rounded-xl  flex flex-col items-center '>
          <h1 className='font-bold text-2xl'>Your Message And Payment </h1>
        <div className='flex flex-col  items-center justify-around w-full'>
        <input className='bg-white text-black w-full  py-1 px-3 focus:outline-none my-2 rounded-xl ' placeholder='Enter Your Full Name' type="text" name="username" id="" />
        <input className='bg-white text-black w-full  py-1 px-3 focus:outline-none my-2 rounded-xl ' placeholder='Enter Your Message' type="text" name="message" id="" />
        <input className='bg-white text-black w-full  py-1 px-3 focus:outline-none my-2 rounded-xl ' placeholder='Enter Amount' type="number" name="amount" id="" />
          <button className='text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 my-3 text-center leading-5 w-full'>Pay</button>
        </div>
       <div className='mb-[5px]'>or</div>
        <div className="options w-full px-1 flex justify-center gap-4 ">
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+ 10₹</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+ 20₹</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+ 30₹</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+ 40₹</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+ 50₹</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+ 100₹</button>
        </div>
          </div>
        </div>

        </div>

      </main>
    </>
  )
}

export default Username
