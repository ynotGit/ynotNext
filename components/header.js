
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerLineTopBottom = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
    const hamburgerLineMiddle = `h-1 w-4 my-1 ml-1.5 rounded-full bg-black transition ease transform duration-300`;

    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 md:py-4 text-lg text-gray-700 bg-white">
                <div>
                    <a href="#">
                        <Image
                            src="/images/logo-white.png"
                            alt="Picture of the author"
                            width={70}
                            height={70}
                        />
                    </a>
                </div>

                <button
                    id="menu-button"
                    className="flex flex-col h-12 w-12 justify-center items-center group md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`${hamburgerLineTopBottom} ${isOpen
                            ? "w-8 rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div className={`${hamburgerLineMiddle} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                    <div
                        className={`${hamburgerLineTopBottom} ${isOpen
                            ? "w-8 -rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                </button>

                <div className="max-h-30 w-full px-4 md:flex md:items-center md:w-auto" id="menu">
                    {/* <ul className="text-base text-gray-700 md:flex md:justify-between md:pt-0"> */}
                    <ul className={`${isOpen
                        ? "text-base text-gray-700 md:flex md:justify-between md:pt-0"
                        : "hidden text-base text-gray-700 md:flex md:justify-between md:pt-0"
                        }`} >
                        <li className="pl-4 md:pt-1  text-right">
                            <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                            >About</Link>
                        </li>
                        <li className="pl-4 pt-1 text-right">
                            <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                            >Services</Link>
                        </li>
                        <li className="pl-4 pt-1 text-right">
                            <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                            >Blog</Link>
                        </li>
                        <li className="pl-4 pt-1 text-right">
                            <Link
                                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                                href="#"
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}