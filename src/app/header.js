import Link from 'next/link';
import React from "react";
import logo from '../../public/assets/logo.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="mb-5 flex justify-center">
            <Link href="https://www.myeduid.my/">
                  <span className="cursor-pointer text-indigo-600 font-bold text-xl hover:text-indigo-500 transition duration-300">
                      <Image
                          src={logo}
                          className="min-[320px]:h-[20px] min-[320px]:w-[37px] lg:h-auto lg:w-auto"
                          alt="Picture of the author"
                      />
                  </span>
            </Link>
        </div>
    )
}
export default Header