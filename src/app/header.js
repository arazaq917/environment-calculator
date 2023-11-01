import Link from 'next/link';
import React from "react";
import logo from '../../public/assets/logo.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="ml-[100px]">
            <Link href="#">
                  <span className="cursor-pointer text-indigo-600 font-bold text-xl hover:text-indigo-500 transition duration-300">
                      <Image
                          src={logo}
                          alt="Picture of the author"
                      />
                  </span>
            </Link>
        </div>
    )
}
export default Header