"use client"
import Image from 'next/image'
import React from 'react'
import { faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <>
      <div className='w-full bg-[#202528] flex flex-col-reverse md:flex-row p-5 lg:px-12 text-white border-t border-black md:justify-between'>
        <div className='flex justify-center gap-x-3 w-full mb-7 md:mb-0 md:w-fit'>
          <Image
          src={'/Images/jgec-no-bg.png'}
          width={100}
          height={100}
          alt='JGEC Logo'
          draggable={false}
          className='w-24 h-24 md:h-32 md:w-32 object-cover relative top-0'
          />
          <div className='flex flex-col gap-y-4 mt-2 md:mt-5'>
            <p className='text-3xl md:text-5xl font-bold'>JGEC</p>
            <div>
              <p className='text-sm text-slate-100/75'>Jalpaiguri, West Bengal</p>
              <a href="https://jgec.ac.in/" target='_blank' className='hover:text-blue-500 text-sm text-slate-100/75 hover:underline'>jgec.ac.in</a>
            </div>
          </div>
        </div>
        <div className='flex gap-12 lg:gap-28 justify-center py-7 md:pb-0 md:pt-2 w-full md:w-fit'>
          <div>
            <p className='text-lg lg:text-xl font-bold mb-2'>About us</p>
            <ul className='text-sm flex flex-col gap-1 text-slate-200/75 lg:pl-2'>
              <Link href={'/events'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                About
              </Link>
              <Link href={'/team'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                Sponsors
              </Link>
              <Link href={'/registration'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                Teams
              </Link>
              <Link href={'/events'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                SRISTI 2K22
              </Link>
            </ul>
          </div>
          <div>
            <p className='lg:text-xl font-bold mb-2'>Event Links</p>
            <ul className='text-sm flex flex-col gap-1 text-slate-200/75 lg:pl-2'>
              <Link href={'/events'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                Events
              </Link>
              <Link href={'/login'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                Login
              </Link>
              <Link href={'/registration'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                Registrattion
              </Link>
              <Link href={'/events'} className="relative w-fit block after:block  after:h-[2px] after:bg-white after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-fuchsia-100 transition-all">
                Leaderboard
              </Link>
            </ul>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 justify-center items-center md:justify-between w-full md:w-fit'>
          <div className='flex flex-col items-center'>
            <Image
            src={'/Images/Sristi1.png'}
            width={200}
            height={200}
            alt='JGEC Logo'
            />
            <Image
            src={'/Images/Sristi2.png'}
            width={75}
            height={75}
            alt='Sristi Logo'
            draggable={false}
            />
          </div>
          <div className='flex lg:flex-col gap-2 md:mt-2 lg:pr-3'>
            <motion.a initial={{y: 0}} whileHover={{y: -8}}  transition={{ type: 'tween', duration: 0.15 }} animate={{ y: 0 }}
            className='group p-3 flex justify-center items-center rounded-full hover:bg-slate-100/10 transition-all duration-75' 
            target='_blank' href="https://www.instagram.com/sristijgec/">
              <FontAwesomeIcon
              icon={faInstagram}
              className='text-2xl cursor-pointer group-hover:text-[#E1306C] transition-all duration-100'
              />
            </motion.a>
            <motion.a initial={{y: 0}} whileHover={{y: -8}}  transition={{ type: 'tween', duration: 0.15 }} animate={{ y: 0 }}
            className='group p-3 flex justify-center items-center rounded-full hover:bg-slate-100/10 transition-all duration-75' 
            target='_blank' href="https://www.linkedin.com/in/sristi-jgec-b35aaa194/?originalSubdomain=in">
              <FontAwesomeIcon
              icon={faLinkedin}
              className='text-2xl cursor-pointer group-hover:text-[#0A66C2] transition-all duration-100'
              />
            </motion.a>
            <motion.a initial={{y: 0}} whileHover={{y: -8}}  transition={{ type: 'tween', duration: 0.15 }} animate={{ y: 0 }}
            className='group p-3 flex justify-center items-center rounded-full hover:bg-slate-100/10 transition-all duration-75' 
            target='_blank' href="https://www.facebook.com/sristi2k18.jgec/">
              <FontAwesomeIcon
              icon={faFacebookF}
              className='text-2xl cursor-pointer group-hover:text-[#4267B2] transition-all duration-100'
              />
            </motion.a>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#202528] text-slate-100/75 md:text-xl font-medium text-center pb-5'>
        © SRISTI 2023. All rights reserved.
      </div>
    </>
  )
}

export default Footer