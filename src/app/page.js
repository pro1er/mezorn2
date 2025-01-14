import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center">
    <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
    <div className="absolute z-10 py-8 flex items-center justify-between xl:w-[1120px] w-full px-8  xl:px-0">
      <Image
        src="/l4.png"
        width={320}
        height={320}
        alt="Logo"
        className="w-[100px] xl:w-[140px] "
        priority 
      />
        <Link
          href="#contact"
          className="font-monBlack text-white bg-big rounded-full px-6 py-2 text-xs sm:text-sm md:text-base "
        >
          Contacts
        </Link>
    </div>
    <div className="absolute xl:w-[1120px] h-full flex items-center xl:justify-between flex-col lg:flex-row justify-evenly gap-12 lg:gap-0 w-full px-8  pt-20">
      <div className="flex flex-col gap-8 top-52 xl:top-auto w-full xl:w-auto xl:items-start">
        <h1 className="2xl:text-[100px] lg:text-[80px] md:text-[80px] text-[40px] text-big font-monBlack leading-[1.2] text-center lg:text-left">
          Household <br /> Cleaning <br /> Products
        </h1>
        <p className="2xl:text-[20px] xl:text-[16px] lg:text-[12px]  text-[10px] w-[440px] text-small font-monRegular hidden lg:block text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequa
        </p>
      </div>
      <Image
        src="/low v2.png"
        width={720}
        height={720}
        alt="Desktop Background"
        className="w-[500px]  md:w-full lg:w-[500px]"
        priority 
      />
    </div>
  </div>  )
}
