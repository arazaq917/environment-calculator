import Link from 'next/link';
import React from "react";

const Header = () => {
    return (
        <nav className="bg-white shadow-lg p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="#">
                  <span
                      className="cursor-pointer text-indigo-600 font-bold text-xl hover:text-indigo-500 transition duration-300">
                    Logo
                  </span>
                </Link>
                <div className="space-x-10">
                    <Link href="#">
                        <span className="cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-300">
                          Page 1
                        </span>
                    </Link>
                    <Link href="#">
                        <span className="cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-300">
                          Page 2
                        </span>
                    </Link>
                    <Link href="#">
                        <span className="cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-300">
                          Page 3
                        </span>
                    </Link>
                </div>
                <Link href="#">
                  <span
                      className="cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300">
                    Login
                  </span>
                </Link>

            </div>
        </nav>
    )
}
export default Header