
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
    useEffect(() => {
        const button = document.querySelector('#menu-button');
        const menu = document.querySelector('#menu');


        button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

    }, []);
    return (
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
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

            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>

            <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                    <li className="p-1">
                        <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                        >About</Link>
                    </li>
                    <li className="p-1">
                        <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                        >Services</Link>
                    </li>
                    <li className="p-1">
                        <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                        >Blog</Link>
                    </li>
                    <li className="p-1">
                        <Link
                            className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                            href="#"
                        >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}