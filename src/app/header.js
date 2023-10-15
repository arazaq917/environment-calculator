import Link from 'next/link';
import React from "react";

const Header = () => {
    return (
        <nav className="bg-white shadow p-4 mb-1">
            <div className="container mx-auto flex items-center justify-center">
                <div className="space-x-10">
                    <Link href="#">
                      <span className="cursor-pointer text-indigo-600 font-bold text-xl hover:text-indigo-500 transition duration-300">
                        Logo
                      </span>
                    </Link>
                </div>

            </div>
        </nav>
    )
}
export default Header