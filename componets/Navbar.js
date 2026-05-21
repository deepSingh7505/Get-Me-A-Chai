import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between px-4  bg-[#00091D]   text-white p-2'>

    <div className='text-2xl'>
     FundRazer

          </div>
          <div className='flex gap-6 items-center'>
            <Link href="/">Home</Link>
            <Link href="/Home">About</Link>
            <Link href="https://github.com/deepSingh7505">GitHub</Link>
            <Link href="https://www.linkedin.com/in/deepsingh7505/">Linkedin</Link>
            <Link href="/Login"> <button type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
</Link>

            </div>
    </nav>
    </>
  )
}

export default Navbar
