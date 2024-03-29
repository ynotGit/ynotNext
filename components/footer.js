import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import CTAButton from './ctaButton';

export default function Footer() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <footer className="px-4 py-16">
            <div className="m-w-36 px-4 ">
                <div className="text-center">
                    <h2>
                        Ready To Take Your Website To The Next Level?
                    </h2>
                    <p>
                        Get in touch today to see how we can help your business grow.
                    </p>
                    <CTAButton />
                </div>
                <div className="grid grid-cols-1 pt-3 md:grid-cols-2">
                    <div className="">
                        <a href="#">
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
                        <p>Y Not Innovate || Crafted With Pride</p>
                        <div className="flex">
                            <a href="" className="text-3xl pt-2 pr-2 text-black dark:text-white ">
                                <AiFillTwitterCircle />
                            </a>
                            <a href="" className="text-3xl pt-2 pr-2 text-black dark:text-white ">
                                <AiFillGithub />
                            </a>
                            <a href="" className="text-3xl pt-2 text-black dark:text-white ">
                                <AiFillLinkedin />
                            </a>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <li className="md:text-right md:pl-4 pt-1">
                                <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >About</Link>
                            </li>
                            <li className="md:text-right md:pl-4 pt-1">
                                <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Services</Link>
                            </li>
                            <li className="md:text-right md:pl-4 pt-1">
                                <Link className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Blog</Link>
                            </li>
                            <li className="md:text-right md:pl-4 pt-1">
                                <Link
                                    className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                                    href="#"
                                >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}