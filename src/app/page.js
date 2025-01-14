import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full h-screen flex justify-center relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 top-0 h-1/2 bg-white"></div>

      {/* Header */}
      <div className="absolute z-10 flex items-center justify-between w-full px-8 py-8 xl:w-[1120px]">
        <Image
          src="/l4.png"
          width={140}
          height={140}
          alt="Logo"
          className="w-[100px] xl:w-[140px]"
          priority
        />
        <Link
          href="#contact"
          className="px-6 py-2 text-xs font-bold text-white bg-big rounded-full sm:text-sm md:text-base"
        >
          Contacts
        </Link>
      </div>

      {/* Main Content */}
      <div className="absolute flex flex-col items-center w-full gap-12 px-8 pt-20 lg:flex-row xl:justify-between xl:w-[1120px] lg:gap-0">
        {/* Text Section */}
        <div className="flex flex-col gap-8 w-full lg:items-start xl:w-auto">
          <h1 className="text-[40px] leading-[1.2] font-bold text-center text-big lg:text-left lg:text-[80px] 2xl:text-[100px]">
            Household <br /> Cleaning <br /> Products
          </h1>
          <p className="hidden w-[440px] text-justify text-small lg:block xl:text-[16px] 2xl:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Image Section */}
        <Image
          src="/low v2.png"
          width={720}
          height={720}
          alt="Desktop Background"
          className="w-[500px] md:w-full lg:w-[500px]"
          priority
        />
      </div>
    </div>
  );
}
