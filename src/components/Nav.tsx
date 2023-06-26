import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='container flex gap-1 mx-auto justify-between items-center my-2'>
      <div className='flex-1'>
        <Link href='/' className='text-2xl font-bold'>aapi</Link>
      </div>
      <div className = 'flex gap-3'>
        <div className='flex-1 text-center'>
          <Link href='/artists'>artists</Link>
        </div>
        <div className='flex-1 text-center'>
          <Link href='/about'>about</Link>
        </div>
        <div className='flex-1 text-center'>
          <Link href='/contact'>contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav