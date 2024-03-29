
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes'
import { BsMoonStars, BsFillSunFill } from 'react-icons/bs';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerLineTopBottom = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 dark:bg-white`;
    const hamburgerLineMiddle = `h-1 w-4 my-1 ml-1.5 rounded-full bg-black transition ease transform duration-300 dark:bg-white`;
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <header>
            <nav className="m-w-36 px-2 pt-2 pb-2 flex flex-wrap items-center justify-between w-full text-lg text-gray-700">
                <div>
                    <a href="/" className="flex items-center">
                        {theme === 'light' ? (
                            <Image
                                src="/images/logo.png"
                                alt="Picture of the author"
                                width={60}
                                height={60}
                                className="flex items-center"
                            />
                        ) : (
                            <Image
                                src="/images/logo-white.png"
                                alt="Picture of the author"
                                width={60}
                                height={60}
                                className="flex items-center"
                            />
                        )}
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
                    <ul className={`${isOpen
                        ? "transition-height duration-1000 ease-in-out text-base text-gray-700 md:flex md:justify-between md:pt-0"
                        : "hidden text-base text-gray-700 md:flex md:justify-between md:pt-0"
                        }`} >
                        <li className="pl-4 md:pt-1  text-right">
                            <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            >
                                {theme === 'light' ? (
                                    <BsMoonStars className="text-black dark:text-white w-5 h-5" />
                                ) : (
                                    <BsFillSunFill className="text-black dark:text-white w-5 h-5" />
                                )}
                            </button>
                        </li>
                        <li className="pl-4 md:pt-1 text-right text-black dark:text-white">
                            <Link className="md:p-4 py-2 block" href="#"
                            >About</Link>
                        </li>
                        <li className="pl-4 pt-1 text-right text-black dark:text-white">
                            <Link className="md:p-4 py-2 block" href="#"
                            >Services</Link>
                        </li>
                        <li className="pl-4 pt-1 text-right text-black dark:text-white">
                            <Link className="md:p-4 py-2 block" href="#"
                            >Blog</Link>
                        </li>
                        <li className="pl-4 pt-1 text-right text-black dark:text-white">
                            <Link
                                className="md:p-4 py-2 block" href="#"
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}