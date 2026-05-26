"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'
import { useState } from "react"

const Navbar = () => {
  const { data: session } = useSession()
  const [showdrop, setshowdrop] = useState(false)
  const logout = () => {
    const ans = confirm("Do You Want to SignOut")
    if (ans) {
      signOut()
    }
  }

  return (
    <>
      <nav className='flex justify-between px-4  bg-[#00091D]   text-white p-2'>

        <div className='text-2xl'>
          FundRazer

        </div>
        <div className='flex gap-8 items-center'>

          <Link href="/">Home</Link>
          <Link href="/Dashboard">About</Link>

          {!session &&
            <Link href="/Login"> <button type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
            </Link>}
          {session &&
            <>
              <div>
                <button onClick={() => setshowdrop(!showdrop)}
                  id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong cursor-pointer relative" type="button">
                  Welcome {session.user.name}
                  <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                
                <div id="dropdownDelay" className={`z-10 ${showdrop ? "" : "hidden"}  bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-full absolute bg-slate-600 top-8 left-0`}>
                  <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDelayButton">
                    <li>
                      <Link href="/Dashboard" className="hover:bg-slate-400 inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="/Settings" className="hover:bg-slate-400 inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</Link>
                    </li>
                    <li>
                      <Link onClick={()=>logout()} href="#" className="hover:bg-slate-400 inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign Out</Link>
                    </li>

                  </ul>
                </div>
                </button>

              </div>


            </>
          }


        </div>
      </nav>
    </>
  )
}

export default Navbar
