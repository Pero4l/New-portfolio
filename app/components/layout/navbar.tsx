import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* Logo */}
            <div className=''>
                <Image className='w-44' src={logo} alt='Logo' />
            </div>

            <div>
                <ul>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Portfolio</li>

                    <button>CONTACT ME</button>
                </ul>
            </div>
      </nav>
    </div>
  )
}

export default Navbar
