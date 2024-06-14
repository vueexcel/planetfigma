'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const onMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const menuItems = [
        { name: 'BRIDGE', href: '#' },
        { name: 'SWAP', href: '#' },
        { name: 'GOVERNANCE', href: '#' },
        { name: 'EXPLORE', href: '#' },
        { name: 'ABOUT', href: '#' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-[#0F1012] flex items-center justify-center w-full border-b-0 mg:border-b mg:border-b-slate-800">
            <div className="flex flex-col items-center w-full mx-auto overflow-hidden max-1200 mg:px-4 max-w-7xl mg:flex-row">
                <div className='flex items-center justify-between w-full px-4 py-2 border-b mg:px-0 mg:py-5 border-b-slate-800 mg:border-b-0 mg:w-auto'>
                    <Link href={'/'} className='hover:opacity-90'>
                        <Image
                            src={'/images/logo.svg'}
                            alt="Blockchain AI"
                            width={200}
                            height={100}
                        />
                    </Link>

                    <button className='p-3 transition-all rounded-full mg:hidden active:scale-95 hover:opacity-80 hover:bg-slate-900' type="button" onClick={onMenuClick}>
                        <Image src={'/icons/MenuIcon.svg'} alt="menu" height={24} width={24} />
                    </button>
                </div>

                <div
                    className={'flex flex-col items-center justify-between w-full mt-4 transition-all mg:mt-0 mg:ml-12 mg:flex-row ' + (showMenu ? '' : 'hidden mg:flex')}

                >
                    <ul className='flex flex-col items-center mg:flex-row'>
                        {menuItems.map((item, index) => (
                            <li key={index}
                            >
                                <Link href={item.href} className='block px-4 py-4 text-sm text-gray-500 hover:opacity-80 text-uppercase'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className='mt-8 mg:mt-0 px-4 py-1.5 text-sm bg-white rounded-sm hover:opacity-90 active:scale-95 text-slate-900'
                        type='button'
                    >
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
