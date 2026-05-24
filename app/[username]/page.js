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
          <div className='supporters  w-1/2 bg-slate-700 p-4 rounded-xl max-h-[212px] overflow-auto'>
            <h1 className='font-bold text-2xl'>Supporters - </h1>
            <ul className='mt-3 '>
              <li>DeepSingh donated 1000$ and say "good luck"</li>
              <li>DeepSingh donated 1000$ and say "good luck"</li>
              <li>DeepSingh donated 1000$ and say "good luck"</li>
           <li>DeepSingh donated 1000$ and say "good luck"</li>
            </ul>
          </div>
          <div className='make payment  w-1/2 bg-slate-700 p-4 rounded-xl  flex flex-col items-center max-h-[212px]'>
          <h1 className='font-bold text-2xl'>Make Payment </h1>
        <div className='flex  items-center justify-around w-full'>
        <input className='bg-white text-black w-[75%]  p-3 my-3 rounded-xl ' type="number" name="" id="" />
          <button className='bg-[#00091D] w-[15%] p-3 rounded-xl cursor-pointer'>Pay</button>
        </div>
       <div className='mb-[5px]'>or</div>
        <div className="options flex justify-around gap-2">
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+100</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+200</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+300</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+400</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+500</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl cursor-pointer'>+1000</button>
        </div>
          </div>
        </div>

        </div>

      </main>
    </>
  )
}

export default Username
