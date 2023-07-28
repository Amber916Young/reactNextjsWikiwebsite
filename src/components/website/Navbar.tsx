"use client";
import React, { useState } from 'react';
import { BarsOutlined, CloseOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';
import Image from 'next/image';

import Logo from '@/assets/images/Logo.png';
import IconButton from '@/src/components/button/IconButton';
import { NavLinks, SelectedPage } from '@/src/interface/index';
import Link from '@/node_modules/next/link';

type Props = {
    isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
    const flexBetween = 'flex items-center ';
    const textHover = ' purple-darkest border border-purple-light hover:bg-purple-light\n' +
        '                                            hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg\n' +
        '                                            text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-violet-500\n' +
        '                                            dark:text-violet-500 dark:hover:text-white dark:focus:ring-violet-800 dark:hover:bg-violet-500';

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? 'ease-in-out	 duration-500 ' : 'bg-purple-darker ease-in-out	 drop-shadow duration-500  ';


    return (
        <nav
            className={`${navbarBackground} ${flexBetween}  px-8 justify-between py-4  fixed top-0 z-30 w-full  shadow`}>
            <div className="flex items-center">

                <button className="mr-4 p-2 text-white bg-purple-light  rounded hover:bg-purple-base">
                    <BarsOutlined style={{ fontSize: '170%' }} />
                </button>

                <div className="mr-4">
                    <Image src={Logo} alt="Logo" className="w-8 h-8"/>
                </div>
                <ul className="hidden md:flex space-x-4 m-0">
                    {NavLinks.map((link) => (
                        // eslint-disable-next-line react/jsx-key
                        <Link href={link.href} className="text-purple-lightest hover:text-gray-900" >
                            {link.text}
                        </Link>

                    ))}
                </ul>
            </div>

            <div className="flex items-center">
                <div className="hidden md:block mr-4">
                    <input type="text" placeholder="Search" className="px-4 py-2 border rounded-lg" />
                </div>
                <IconButton onClick={() => console.log('Write button clicked')}>
                    <EditOutlined />
                    <span className="pl-1.5">Write</span>
                </IconButton>

                <IconButton onClick={() => console.log('Login')}>
                    <span className="pl-1.5">Login</span>
                </IconButton>

                <div className="hidden md:inline-block w-10 h-10 ml-4 border rounded-full">
                    <Image src={Logo} alt="Avatar" className="w-full h-full rounded-full"/>
                </div>
            </div>
        </nav>


    );


};

export default Navbar;
