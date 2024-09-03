import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <navbar>
      <div className='w-full py-3 border-b'>

        <div className='flex justify-between px-20 items-center font-semibold'>
          <div>
            <h1 className="text-2xl">LOGO</h1>
          </div>
          <div className='flex xl:gap-10 md:gap-8  gap-2'>
            <Link href="">Home</Link>
            <Link href="">Work</Link>
            <Link href="/about">About</Link>
            <Link href="">Service</Link>
            <Link href="">TestimoniLinkl</Link>
          </div>
          <div>
            <button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold'><Link href="/contact">Contact</Link></button>
          </div>
        </div>
        
      </div>
    </navbar>
  )
}

export default Navbar